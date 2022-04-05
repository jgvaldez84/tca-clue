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

import { useState } from 'react';

setupIonicReact();

interface player {
  name: string;
  order: number;
}

export interface gameResult {
  winner: string; // "Me"
  loser?: string; //'Kenny'
  quit?: string; //'Colleen'
  players: player[];
}

export interface currentGame {
  start: string;
  players: string[];
}

const game1: gameResult = {
  winner: 'Kenny',
  players: [
    { name: 'Me', order: 1 },
    { name: 'Kenny', order: 2 },
  ],
};

const game2: gameResult = {
  winner: 'Kenny',
  loser: '',
  players: [
    { name: 'Me', order: 1 },
    { name: 'Kenny', order: 2 },
  ],
};

let gameResults: gameResult[] = [game1, game2];

const addGameResult = (
  results: gameResult[],
  result: gameResult
): gameResult[] => [...results, result];

gameResults = addGameResult(gameResults, {
  winner: 'Colleen',
  players: [
    { name: 'Me', order: 1 },
    { name: 'Kenny', order: 2 },
    { name: 'Colleen', order: 3 },
    { name: 'Tom', order: 4 },
  ],
});

const getUniquePlayers = (results: gameResult[]) => [
  ...new Set(results.flatMap((x) => x.players.map((y) => y.name))),
];

const App: React.FC = () => {
  const [results, setResults] = useState<gameResult[]>(gameResults);
  const [currentGame, setCurrentGame] = useState<currentGame>({
    start: '',
    players: [],
  });

  const addGameResult = (singleGameResult: gameResult) => {
    setResults([...results, singleGameResult]);
  };

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route exact path='/guess'></Route>
          <Route exact path='/play'>
            <PlayGame currentGame={currentGame} addGameResult={addGameResult} />
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
