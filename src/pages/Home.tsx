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
  IonInput,
  IonItem,
  IonText,
} from '@ionic/react';

import './Home.css';
import clue from '../components/clue.jpeg';
import { gameResult, getUniquePlayers } from '../App';
import MyModal from '../components/Modal';

import { useState } from 'react';

interface HomeProps {
  gameResults: gameResult[];
  uniquePlayers: string[];
  emailAddress: string;
  updateEmailAddress: (e: string) => void;
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

  return lb;
};

const Home: React.FC<HomeProps> = ({
  gameResults,
  uniquePlayers,
  emailAddress,
  updateEmailAddress,
}) => {
  const [modal, setModal] = useState({ isOpen: false });
  const [emailAddressForEditing, setEmailAddressForEditing] =
    useState(emailAddress);
  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='plum'>
            <IonTitle className='ion-text-center'>
              The companion App for
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color='dark'>
          <IonImg src={clue} className='ion-padding' alt='clue logo'></IonImg>
          {/* <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Clue</IonTitle>
            </IonToolbar>
          </IonHeader> */}

          {emailAddress.length > 0 ? (
            <>
              <IonCard color='plum'>
                <IonCardContent>
                  <IonText color='success'>
                    Currently logged in as:<br></br>
                    {emailAddress}
                  </IonText>
                </IonCardContent>
                <IonButton
                  fill='outline'
                  expand='block'
                  className='ion-text-center, ion-padding'
                  color='success'
                  onClick={() => updateEmailAddress('')}
                >
                  Sign Out
                </IonButton>
                <IonButton
                  fill='outline'
                  expand='block'
                  className='ion-text-center, ion-padding'
                  color='success'
                  routerLink='/setup'
                >
                  Setup New Game
                </IonButton>
                <br></br>
                {/* <IonButton
              fill='outline'
              expand='block'
              className='ion-text-center, ion-padding'
              color='success'
              routerLink='/play'
            >
              Go To Gameboard
            </IonButton> */}
                <br></br>
              </IonCard>
              <IonCard color='plum'>
                <IonCardHeader>
                  <IonCardTitle className='ion-text-center'>
                    Winners
                  </IonCardTitle>
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
              <IonCard color='plum'>
                <IonCardContent>
                  <IonCardTitle color='white' className='ion-text-center'>
                    More Stats
                  </IonCardTitle>
                  <br></br>

                  <IonButton
                    fill='outline'
                    color='success'
                    expand='block'
                    onClick={() => setModal({ isOpen: true })}
                  >
                    <MyModal
                      isOpen={modal.isOpen}
                      onClose={() => setModal({ isOpen: false })}
                      gameResults={gameResults}
                      uniquePlayers={getUniquePlayers(gameResults)}
                    />
                    Game Stats
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </>
          ) : (
            <>
              <IonCard color='plum'>
                <IonText class='ion-text-center' color='success'>
                  <h3>To begin, enter your email address:</h3>
                </IonText>
                <IonInput
                  class='ion-text-center'
                  color='white'
                  value={emailAddressForEditing}
                  placeholder='enteryour@emailaddress.com'
                  onIonChange={(e) =>
                    setEmailAddressForEditing(e.detail.value ?? '')
                  }
                ></IonInput>
                <br></br>
                <br></br>

                <IonButton
                  fill='outline'
                  color='success'
                  expand='block'
                  onClick={() => updateEmailAddress(emailAddressForEditing)}
                >
                  Begin saving your stats
                </IonButton>
                <br></br>
                <br></br>
              </IonCard>
            </>
          )}
        </IonContent>
      </IonApp>
    </IonPage>
  );
};
export default Home;
