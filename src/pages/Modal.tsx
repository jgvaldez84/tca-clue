/* Using with useIonModal Hook */

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, useIonModal } from '@ionic/react';

const rightGuess = () => {};

const wrongGuess = () => {};

const quitGame = () => {};
const Body: React.FC<{
  count: number;
  right: string;
  wrong: string;
  onDismiss: () => void;
  onIncrement: () => void;
  rightGuess: () => 'you win';
  wrongGuess: () => 'back to the drawing board';
}> = ({ count, onDismiss, onIncrement }) => (
  <div>
    count: {count}
    <IonButton expand='block' onClick={() => rightGuess()}>
      Correct!
    </IonButton>
    <IonButton expand='block' onClick={() => wrongGuess()}>
      Wrong!
    </IonButton>
    <IonButton expand='block' onClick={() => quitGame()}>
      Quit Game
    </IonButton>
    <IonButton expand='block' onClick={() => onDismiss()}>
      Close
    </IonButton>
  </div>
);

const ModalExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };

  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    count,
    onDismiss: handleDismiss,
    onIncrement: handleIncrement,
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton
          expand='block'
          onClick={() => {
            present({
              cssClass: 'my-class',
            });
          }}
        >
          Show Modal
        </IonButton>
        <div>Count: {count}</div>
      </IonContent>
    </IonPage>
  );
};

export default ModalExample;
