import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import Home from './pages/Home';

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

import GameBoard from './pages/GameBoard';
import Players from './pages/Players';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactHashRouter>
      <Route exact path='/play'>
        <GameBoard />
      </Route>

      <Route exact path='/players'>
        <Players />
      </Route>

      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
    </IonReactHashRouter>
  </IonApp>
);

export default App;
