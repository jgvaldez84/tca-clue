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
  AnimationBuilder,
} from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router';
import clue from '../components/clue.jpeg';
import { useState, useRef } from 'react';

import './Home.css';
import { Mode, ActionSheetAttributes } from '@ionic/core';

interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
  data?: T;
}
interface ActionSheetOptions {
  header?: string;
  subHeader?: string;
  cssClass?: string | string[];
  buttons: (ActionSheetButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: ActionSheetAttributes;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  gameResults: gameResult[];
}

const PlayGame: React.FC<PlayGameProps> = ({
  addGameResult,
  currentGame,
  gameResults,
}) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const history = useHistory();

  const pageRef = useRef();

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
    <IonPage ref={pageRef}>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>Make your Choices</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader>Current Detectives:</IonCardHeader>
            {currentGame.players.map((x) => (
              <IonList lines='none'>
                <IonItem>
                  <IonLabel key={x}>{x}</IonLabel>
                </IonItem>
              </IonList>
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

          {winningPlayer}

          <IonButton expand='block' onClick={() => history.push('/')}>
            Quit
          </IonButton>

          <IonButton onClick={() => setShowActionSheet(true)} expand='block'>
            Show Action Sheet
          </IonButton>
          <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            cssClass='my-custom-class'
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                icon: trash,
                id: 'delete-button',
                data: {
                  type: 'delete',
                },
                handler: () => {
                  console.log('Delete clicked');
                },
              },
              {
                text: 'Share',
                icon: share,
                data: 10,
                handler: () => {
                  console.log('Share clicked');
                },
              },
              {
                text: 'Play (open modal)',
                icon: caretForwardCircle,
                data: 'Data value',
                handler: () => {
                  console.log('Play clicked');
                },
              },
              {
                text: 'Favorite',
                icon: heart,
                handler: () => {
                  console.log('Favorite clicked');
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
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default PlayGame;
