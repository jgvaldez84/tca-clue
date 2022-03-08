import { IonApp, IonButton, IonContent, IonNav, IonPage } from '@ionic/react';
import { useHistory } from 'react-router';

const NewModal: React.FC = () => {
  const history = useHistory();
  const guessedRight = () => {
    console.log('BOO');
    history.push('/');
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
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default NewModal;
