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
  IonGrid,
  IonList,
  IonIcon,
  IonCardContent,
} from '@ionic/react';
import { trash, close, glassesOutline, checkmarkCircle } from 'ionicons/icons';

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
    <IonGrid>
      <IonList>
        <IonButton
          fill='outline'
          color='success'
          key={x}
          onClick={() => endGame(x)}
        >
          {x} solved the mystery
        </IonButton>
      </IonList>
    </IonGrid>
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
              <IonTitle className='ion-padding'>
                Which Detective <br></br>solved the mystery?
              </IonTitle>
            </IonCardHeader>

            {winningPlayer}
          </IonCard>
          <IonCard>
            <IonCardContent>
              <IonButton
                expand='block'
                color='warning'
                className='ion-padding'
                onClick={() => history.push('/')}
              >
                Quit
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default MakeGuess;
