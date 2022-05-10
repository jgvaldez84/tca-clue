import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SetupGame from './pages/SetupGame';
import PlayGame from './pages/PlayGame';
import MakeGuess from './components/MakeGuess';

import { useEffect, useState } from 'react';

import localforage from 'localforage';
import { saveGameToCloud, loadGamesFromCloud } from './TcaCloudApi';

setupIonicReact();

interface player {
  name: string;
  order: number;
}

export interface gameResult {
  winner: string;
  players: player[];
}

export interface currentGame {
  start: string;
  players: string[];
}

export const getUniquePlayers = (results: gameResult[]) => [
  ...new Set(results.flatMap((x) => x.players.map((y) => y.name))),
];

const App: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadGameResults = async () => {
    try {
      const e = await localforage.getItem<string>('emailAddress');
      setEmailAddress(e ?? '');

      if (emailAddress.length > 0) {
        const r = await localforage.getItem<gameResult[]>('gameResults');

        const cloudData = await loadGamesFromCloud(emailAddress, 'tca-clue');

        setResults(r ?? []);
        setResults(cloudData ?? []);
      }
    } catch (err) {
      console.error(err);
      setResults([]);
    }
  };

  const [results, setResults] = useState<gameResult[]>([]);
  const [currentGame, setCurrentGame] = useState<currentGame>({
    start: '',
    players: [],
  });

  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    loadGameResults();
  }, [emailAddress]);

  const updateEmailAddress = async (newEmailAddress: string) => {
    // Update emailAddress state, after saving it to local storage.
    setEmailAddress(
      (await localforage.setItem('emailAddress', newEmailAddress)) ?? ''
    );
  };

  const addGameResult = async (singleGameResult: gameResult) => {
    const updatedResults = [...results, singleGameResult];

    const savedResults = await localforage.setItem(
      'gameResults',
      updatedResults
    );
    setResults(savedResults);

    await saveGameToCloud(
      emailAddress,
      'tca-clue',
      new Date().toISOString(),
      singleGameResult
    );
  };

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route exact path='/guess'>
            <MakeGuess
              currentGame={currentGame}
              gameResults={results}
              addGameResult={addGameResult}
            />
          </Route>

          <Route exact path='/play'>
            <PlayGame
              currentGame={currentGame}
              gameResults={results}
              addGameResult={addGameResult}
            />
          </Route>
          <Route exact path='/setup'>
            <SetupGame
              uniquePlayers={getUniquePlayers(results)}
              setCurrentGame={setCurrentGame}
            />
          </Route>
          <Route exact path='/home'>
            <Home
              gameResults={results}
              uniquePlayers={getUniquePlayers(results)}
              emailAddress={emailAddress}
              updateEmailAddress={updateEmailAddress}
            />
          </Route>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
