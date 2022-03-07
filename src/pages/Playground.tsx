import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { gameResult } from '../App';
import { useHistory } from 'react-router-dom';

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
}

const Playground: React.FC<PlayGameProps> = ({ addGameResult }) => {
  const history = useHistory();

  const endGame = () => {
    // Add the new game result to the app data.
    addGameResult({
      start: '',
      end: '',
      players: [],
      winner: '',
    });

    // Navigate Home.
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Play Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Play Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={endGame}>Done</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Playground;
