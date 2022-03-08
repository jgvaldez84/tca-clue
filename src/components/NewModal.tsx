import { IonApp, IonButton, IonContent, IonNav, IonPage } from '@ionic/react';

interface NewModalProps {
  dismiss: (path: string) => void;
};

const NewModal: React.FC<NewModalProps> = ({dismiss}) => {

  const guessedRight = () => {
    console.log('BOO');
    dismiss("/home");
  };

  const guessedWrong = () => {
    console.log('BOO2');
    dismiss("/play");
  };

  const quitGame = () => {
    console.log('BOO3');
    dismiss("/home");
  };

  return (
    <IonPage>
      <IonApp>
        <IonContent>
          <IonNav></IonNav>
          <IonButton
            onClick={guessedRight}
            expand='block'
            className='ion-text-center'
            color='secondary'
          >
            Correct!
          </IonButton>
          <IonButton
            expand='block'
            onClick={guessedWrong}
            className='ion-text-center'
            color='secondary'
          >
            Wrong!
          </IonButton>
          <IonButton
            onClick={quitGame}
            expand='block'
            className='ion-text-center'
            color='secondary'
          >
            Quit Game
          </IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default NewModal;
