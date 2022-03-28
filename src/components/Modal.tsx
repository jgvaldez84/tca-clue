import { useState, useRef } from 'react';
import {
  IonPage,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonContent,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router';

import clue from '../components/clue.jpeg';
import { currentGame, gameResult } from '../App';

interface ModalProps {
  isOpen: any;
  onClose: any;
}
interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
}

const MyModal: React.FC<ModalProps & PlayGameProps> = ({
  isOpen,
  onClose,
  addGameResult,
  currentGame,
}) => {
  const quitGame = () => {
    addGameResult({
      winner: 'Me',
      players: currentGame.players.map((x: any) => ({
        name: x,
        order: 0,
      })),
    });
  };

  const lostGame = () => {
    addGameResult({
      winner: '',
      loser: 'Me',
      players: currentGame.players.map((x: any) => ({
        name: x,
        order: 0,
      })),
    });
  };

  return (
    <IonPage>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Modal</IonTitle>
          </IonToolbar>
          <IonImg src={clue}></IonImg>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonButton
            expand='block'
            className='ion-text-center'
            color='secondary'
            routerLink='/home'
            onClick={onClose}
          >
            Guessed Right
          </IonButton>
          <IonButton
            expand='block'
            className='ion-text-center'
            color='secondary'
            routerLink='/play'
            onClick={onClose}
          >
            Guessed Wrong
          </IonButton>
          <IonButton expand='block' onClick={quitGame}>
            Quit
          </IonButton>
          <IonButton expand='block' onClick={onClose}>
            Close Modal
          </IonButton>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default MyModal;
