/* eslint-disable no-lone-blocks */
import { Link, Redirect, Route } from 'react-router-dom';
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
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import clue from './clue.jpeg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const redirect = () => {
    <Link to='src/components/GameBoard.tsx' />;
  };
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
                onClick={redirect}
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
  /*
    <IonReactRouter>
<IonRouterOutlet>
  <Route exact path='/home'>
    <Home />
  </Route>
  <Route exact path='/'>
    <Redirect to='/home' />
  </Route>
</IonRouterOutlet>
</IonReactRouter> */
}
export default App;
