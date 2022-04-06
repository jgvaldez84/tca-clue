import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonApp,
  IonImg,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import './Home.css';
import clue from '../components/clue.jpeg';
import { gameResult, getUniquePlayers } from '../App';
import MyModal from '../components/Modal';

import { useState } from 'react';

interface HomeProps {
  gameResults: gameResult[];
  uniquePlayers: string[];
}

const calculateLeaderBoard = (p: string[], r: gameResult[]) => {
  const lb = p.map((x) => {
    const gamesThisPlayerHasPlayed = r.filter((y) =>
      y.players.some((z) => z.name === x)
    );
    const gamesThisPlayerHasWon = gamesThisPlayerHasPlayed.filter(
      (y) => y.winner === x
    );

    return {
      name: x,
      wins: gamesThisPlayerHasWon.length,
      losses: gamesThisPlayerHasPlayed.length - gamesThisPlayerHasWon.length,
      winningPercentage:
        (
          gamesThisPlayerHasWon.length / gamesThisPlayerHasPlayed.length
        ).toFixed(2) + `%`,
    };
  });

  console.log('calculateLeaderBoard', lb);
  return lb;
};

const Home: React.FC<HomeProps> = ({ gameResults, uniquePlayers }) => {
  const [modal, setModal] = useState({ isOpen: false });
  const lb = calculateLeaderBoard(uniquePlayers, gameResults);

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>
              The companion App for
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding' alt='clue logo'></IonImg>
          {/* <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Clue</IonTitle>
            </IonToolbar>
          </IonHeader> */}

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
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Winners</IonCardTitle>
            </IonCardHeader>

            <IonGrid>
              <IonRow>
                <IonCol>Name: </IonCol>
                <IonCol> Wins:</IonCol>
              </IonRow>
              {calculateLeaderBoard(uniquePlayers, gameResults)
                .filter((x) => x.wins)
                .map((x) => (
                  <IonRow>
                    <IonCol>{x.name}</IonCol>
                    <IonCol> {x.wins}</IonCol>
                  </IonRow>
                ))}
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonCardContent>
              <IonCardTitle className='ion-text-center'>
                More Stats
              </IonCardTitle>

              <MyModal
                isOpen={modal.isOpen}
                onClose={() => setModal({ isOpen: false })}
                gameResults={gameResults}
                uniquePlayers={getUniquePlayers(gameResults)}
              />
              <IonButton
                expand='block'
                onClick={() => setModal({ isOpen: true })}
              >
                Game Stats
              </IonButton>
              <IonButton
                expand='block'
                className='ion-text-center'
                color='secondary'
                routerLink='/guess'
              >
                Guess
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};
export default Home;
