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
  IonCardContent,
  IonLabel,
  IonCheckbox,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
  IonGrid,
  IonCol,
  IonItem,
} from '@ionic/react';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router-dom';
import clue from '../components/clue.jpeg';
interface PlayGameProps {
  // addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
}

const PlayGame: React.FC<PlayGameProps> = ({ currentGame }) => {
  const history = useHistory();

  // const endGame = () => {

  //   // Navigate Home.
  //   history.push('/');
  // };

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>Make your Choices</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>

          <IonCard color='light'>
            <IonCardHeader>
              <IonCardSubtitle>Characters</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Mrs. White</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Mrs. Peacock</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Professor Plum</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Colonel Mustard</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Miss Scarlett</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Reverend Green</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Mr. Boddy</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>
          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardSubtitle>Rooms</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Ball Room</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Billiard Room</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Conservatory</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Dining Room</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Hall</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Kitchen</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Lounge</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Library</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Study</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>

          <IonCard color='dark'>
            <IonCardHeader>
              <IonCardSubtitle>Weapons</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Knife</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Revolver</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Rope</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Wrench</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Candlestick</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Lead Pipe</IonLabel>
              <IonCheckbox color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>
          <IonRow>
            <IonCol size='12'>
              <IonCard>
                <IonCardContent>
                  <IonCardTitle>Click to Guess</IonCardTitle>
                  <p>
                    Click the button below to make a guess or to quit your game
                  </p>
                  <IonButton
                    className='ion-margin-top'
                    id='guess'
                    expand='block'
                    color='primary'
                  >
                    Guess &rarr;
                  </IonButton>

                  <IonButton routerLink='Home' expand='block'>
                    Back to Home
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default PlayGame;
