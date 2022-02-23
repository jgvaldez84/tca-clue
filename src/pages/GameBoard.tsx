import {
  IonApp,
  IonCard,
  IonCardSubtitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React from 'react';

const GameBoard: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='tertiary'>
          <IonTitle>Game Board</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard color='light'>
          <IonCardHeader>
            <IonCardSubtitle>Characters</IonCardSubtitle>
          </IonCardHeader>
          <IonLabel>Mrs. White</IonLabel>
          <IonCheckbox color='primary' slot='start'></IonCheckbox>

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
        <IonButton id='guess' expand='block' color='primary'>
          Guess
        </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default GameBoard;
