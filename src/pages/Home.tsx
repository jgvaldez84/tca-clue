import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonApp,
} from '@ionic/react';

import './Home.css';
import clue from '../components/clue.jpeg';
import { gameResult } from '../App';

interface HomeProps {
  gameResults: gameResult[];
}

const calculateWinningPercentage = (results: gameResult[], who: string) =>
  results.filter((x) => x.winner === who).length /
  results.filter(
    (x) => x.winner !== '~~None~~' && x.players.some((y) => y.name === who)
  ).length;

// const calculateShortestGame = (r: gameResult[]) =>
//   Math.min(...r.map((x) => Date.parse(x.end) - Date.parse(x.start)));

const Home: React.FC<HomeProps> = ({ gameResults }) => {
  const suzziesWinningPercentage = !isNaN(
    calculateWinningPercentage(gameResults, 'Suzzie')
  )
    ? calculateWinningPercentage(gameResults, 'Suzzie')
    : 0;

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>
              The Companion App for
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding' alt='clue logo'></IonImg>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Clue</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>
                Your Stats:
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <p>Total Games Played: {gameResults.length}</p>
              </IonText>

              <IonText>
                <p>
                  My Winning percentage:{' '}
                  {calculateWinningPercentage(gameResults, 'Me')}%
                </p>
              </IonText>

              <IonText>
                <p>Games Won:</p>
              </IonText>
              <IonText>
                <p>Games Lost:{}</p>
              </IonText>
              <IonText>
                <p>
                  Games Quit: {calculateWinningPercentage(gameResults, 'Me')}
                </p>
              </IonText>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonButton
              expand='block'
              className='ion-text-center'
              color='secondary'
              routerLink='/setup'
            >
              Setup New Game
            </IonButton>
            <br></br>
            <IonButton
              expand='block'
              className='ion-text-center'
              color='secondary'
              routerLink='/play'
            >
              Go To Gameboard
            </IonButton>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
