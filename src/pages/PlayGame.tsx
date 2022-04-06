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
  IonLabel,
  IonCheckbox,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonList,
  IonActionSheet,
  IonGrid,
} from '@ionic/react';
import { trash, close, glassesOutline } from 'ionicons/icons';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router';
import clue from '../components/clue.jpeg';
import { useState, useRef } from 'react';

import './Home.css';

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  gameResults: gameResult[];
}

const PlayGame: React.FC<PlayGameProps> = ({ addGameResult, currentGame }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const history = useHistory();

  const pageRef = useRef();

  return (
    <IonPage ref={pageRef}>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>Who Dun It?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader>Current Detectives:</IonCardHeader>
            {currentGame.players.map((x) => (
              <IonGrid>
                <IonList lines='none'>
                  <IonItem>
                    <IonLabel key={x}>{x}</IonLabel>
                  </IonItem>
                </IonList>
              </IonGrid>
            ))}
          </IonCard>

          <IonCard color='light'>
            <IonCardHeader>
              <IonCardSubtitle>Characters</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Mrs. White</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Mrs. Peacock</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Professor Plum</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Colonel Mustard</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Miss Scarlett</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Reverend Green</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Mr. Boddy</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>
          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardSubtitle>Rooms</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Ball Room</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Billiard Room</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Conservatory</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Dining Room</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Hall</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Kitchen</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Lounge</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Library</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Study</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>

          <IonCard color='dark'>
            <IonCardHeader>
              <IonCardSubtitle>Weapons</IonCardSubtitle>
            </IonCardHeader>
            <IonItem>
              <IonLabel>Knife</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Revolver</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Rope</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Wrench</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Candlestick</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
            <IonItem>
              <IonLabel>Lead Pipe</IonLabel>
              <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
            </IonItem>
          </IonCard>
          <IonCard>
            <IonButton onClick={() => setShowActionSheet(true)} expand='block'>
              Make Your Next Move
            </IonButton>
            <IonActionSheet
              isOpen={showActionSheet}
              onDidDismiss={() => setShowActionSheet(false)}
              cssClass='my-custom-class'
              buttons={[
                {
                  text: 'Did you get the criminal?',
                  icon: glassesOutline,
                  data: 'Data value',
                  handler: () => {
                    console.log('Play clicked');
                    history.push('/guess');
                  },
                },
                {
                  text: 'Quit',
                  role: 'destructive',
                  icon: trash,
                  id: 'delete-button',
                  data: {
                    type: 'delete',
                  },
                  handler: () => {
                    console.log('Delete clicked');
                    history.push('/');
                  },
                },

                {
                  text: 'Cancel',
                  icon: close,
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  },
                },
              ]}
            ></IonActionSheet>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default PlayGame;
