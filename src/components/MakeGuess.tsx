import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonApp,
  IonCard,
  IonCardHeader,
} from '@ionic/react';

import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router';
import clue from '../components/clue.jpeg';

interface GuessProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  gameResults: gameResult[];
}

const MakeGuess: React.FC<GuessProps> = ({ addGameResult, currentGame }) => {
  const history = useHistory();

  const winningPlayer = currentGame.players.map((x) => (
    <IonButton key={x} onClick={() => endGame(x)}>
      {x} won
    </IonButton>
  ));
  const endGame = (winner: string) => {
    console.log(currentGame);
    const mappedPlayers = currentGame.players.map((x) => ({
      name: x,
      order: 0,
    }));
    console.log(mappedPlayers);
    addGameResult({
      winner: winner,
      players: mappedPlayers,
    });
    // Navigate Home.
    history.push('/');
  };

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>Solve the crime</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader className='ion-text-center'>
              Which Detective solved the mystery?
            </IonCardHeader>

            {winningPlayer}
          </IonCard>

          <IonButton expand='block' onClick={() => history.push('/')}>
            Quit
          </IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default MakeGuess;
