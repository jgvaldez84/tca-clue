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
          gamesThisPlayerHasWon.length / gamesThisPlayerHasPlayed.length
        ).toFixed(2) + `%`,
    };
  });
  return lb;
};

const MyModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  gameResults,
  uniquePlayers,
}) => {
  const lb = calculateLeaderBoard(uniquePlayers, gameResults);

  return (
    <IonPage>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Game Stats</IonTitle>
          </IonToolbar>
          <IonImg src={clue} alt='clue logo'></IonImg>
        </IonHeader>
        <IonContent fullscreen>
          {/* <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size='large'>Home</IonTitle>
            </IonToolbar>
          </IonHeader> */}
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
              {calculateLeaderBoard(uniquePlayers, gameResults)
                .sort((a, b) =>
                  b.winningPercentage.localeCompare(a.winningPercentage)
                )
                .map((x) => (
                  <IonRow>
                    <IonCol>{x.name}</IonCol>
                    <IonCol>{x.losses}</IonCol>
                    <IonCol>{x.winningPercentage}</IonCol>
                    <IonCol>{x.wins}</IonCol>
                  </IonRow>
                ))}
            </IonGrid>
            <IonButton expand='block' onClick={onClose}>
              Close Modal
            </IonButton>
          </IonCard>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default MyModal;
