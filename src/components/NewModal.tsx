import { IonApp, IonButton, IonContent, IonPage } from '@ionic/react';

const NewModal: React.FC = () => {
  return (
    <IonPage>
      <IonApp>
        <IonContent>
          <IonButton
            routerLink='home'
            expand='block'
            className='ion-text-center'
            color='secondary'
          >
            Correct!
          </IonButton>
          <IonButton
            expand='block'
            routerLink='play'
            className='ion-text-center'
            color='secondary'
          >
            Wrong!
          </IonButton>
          <IonButton
            routerLink='home'
            expand='block'
            className='ion-text-center'
            color='secondary'
          >
            Quit Game
          </IonButton>
          <IonButton>Close</IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default NewModal;
