import { IonApp, IonButton, IonContent, IonPage } from '@ionic/react';

const NewModal: React.FC = () => {
  return (
    <IonPage>
      <IonApp>
        <IonContent>
          <IonButton expand='block'>Correct!</IonButton>
          <IonButton expand='block'>Wrong!</IonButton>
          <IonButton expand='block'>Quit Game</IonButton>
          <IonButton>Close</IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default NewModal;
