import { useState } from 'react';
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
  IonModal,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
} from '@ionic/react';

import { gameResult } from '../App';
import clue from '../components/clue.jpeg';

interface ModalProps {
  isOpen: any;
  onClose: any;
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
          (gamesThisPlayerHasWon.length / gamesThisPlayerHasPlayed.length) *
          100
        ).toFixed(1) + `%`,
    };
  });
  return lb;
};

const MyModal: React.FC<ModalProps> = ({
  onClose,
  gameResults,
  uniquePlayers,
}) => {
  // const lb = calculateLeaderBoard(uniquePlayers, gameResults);
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonModal>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Game Stats</IonTitle>
          </IonToolbar>
          <IonImg src={clue} alt='clue logo'></IonImg>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>
                Game Stats
              </IonCardTitle>
            </IonCardHeader>
            <IonItem className='ion-text-center'>
              Total Games Played: {gameResults.length}
            </IonItem>
            <IonGrid>
              <IonRow>
                <IonCol>Name:</IonCol>
                <IonCol>Wins:</IonCol>
                <IonCol>Losses:</IonCol>
                <IonCol>Winning Percentage:</IonCol>
              </IonRow>
              {calculateLeaderBoard(uniquePlayers, gameResults)
                .sort((a, b) =>
                  b.winningPercentage.localeCompare(a.winningPercentage)
                )
                .map((x) => (
                  <>
                    <IonRow>
                      <IonCol>{x.name}</IonCol>
                      <IonCol>{x.wins}</IonCol>
                      <IonCol>{x.losses}</IonCol>
                      <IonCol>{x.winningPercentage}</IonCol>
                    </IonRow>
                  </>
                ))}
            </IonGrid>
            <IonButton expand='block' onClick={onClose}>
              Close
            </IonButton>
          </IonCard>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

/* Using with IonModal Component */

export default MyModal;
