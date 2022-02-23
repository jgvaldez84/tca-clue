import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import clue from '../components/clue.jpeg';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle className='ion-text-center'>The Companion app for</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='dark'>
        <IonImg src={clue} className='ion-padding' alt='logo'></IonImg>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className='ion-text-center'>Your Stats:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Wins: 0<br></br>
            Losses: 0<br></br>
            Incorrect Guesses: 0<br></br>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand='block'
                className='ion-text-center'
                color='secondary'
              >
                Start New Game
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};
{
}
export default Home;
