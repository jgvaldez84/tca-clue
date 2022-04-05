// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonButton,
//   IonImg,
//   IonCard,
//   IonCardHeader,
//   IonCardTitle,
//   IonCardContent,
//   IonText,
//   IonApp,
//   IonGrid,
//   IonRow,
//   IonCol,
// } from '@ionic/react';

// import './Home.css';
// import clue from '../components/clue.jpeg';
// import { gameResult } from '../App';

// interface HomeProps {
//   gameResults: gameResult[];
//   uniquePlayers: string[];
// }

// const calculateLeaderBoard = (p: string[], r: gameResult[]) => {
//   const lb = p.map((x) => {
//     const gamesThisPlayerHasPlayed = r.filter((y) =>
//       y.players.some((z) => z.name === x)
//     );
//     const gamesThisPlayerHasWon = gamesThisPlayerHasPlayed.filter(
//       (y) => y.winner === x
//     );

//     return {
//       name: x,
//       wins: gamesThisPlayerHasWon.length,
//       losses: gamesThisPlayerHasPlayed.length - gamesThisPlayerHasWon.length,
//       winningPercentage:
//         (
//           gamesThisPlayerHasWon.length / gamesThisPlayerHasPlayed.length
//         ).toFixed(2) + `%`,
//     };
//   });

// const Home: React.FC<HomeProps> = ({ gameResults, uniquePlayers }) => {
//   const lb = calculateLeaderBoard(uniquePlayers, gameResults);
//   return (
//     <IonPage>
//       <IonApp>
//         <IonHeader>
//           <IonToolbar color='primary'>
//             <IonTitle className='ion-text-center'>
//               The Companion App for
//             </IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent fullscreen>
//           <IonImg src={clue} className='ion-padding' alt='clue logo'></IonImg>
//           <IonHeader collapse='condense'>
//             <IonToolbar>
//               <IonTitle size='large'>Clue</IonTitle>
//             </IonToolbar>
//           </IonHeader>
//           <IonCard>
//             <IonCardHeader>
//               <IonCardTitle className='ion-text-center'>
//                 Your Stats:
//               </IonCardTitle>
//             </IonCardHeader>
//             <IonCardContent>
//               <IonText>
//                 <p>Total Games Played: {gameResults.length}</p>
//               </IonText>
//               <IonGrid>
//           {calculateLeaderBoard(uniquePlayers, gameResults)
//             .sort((a:any, b:any) =>
//               b.winningPercentage.localeCompare(a.winningPercentage)
//             )
//             .map((x:any) => (
//               <IonRow>
//                 <IonCol>{x.wins}</IonCol>
//                 <IonCol>{x.losses}</IonCol>
//                 <IonCol>{x.winningPercentage}</IonCol>
//                 <IonCol>{x.name}</IonCol>
//               </IonRow>
//             ))}
//         </IonGrid>
//             </IonCardContent>
//           </IonCard>
//           <IonCard>
//             <IonButton
//               expand='block'
//               className='ion-text-center'
//               color='secondary'
//               routerLink='/setup'
//             >
//               Setup New Game
//             </IonButton>
//             <br></br>
//             <IonButton
//               expand='block'
//               className='ion-text-center'
//               color='secondary'
//               routerLink='/play'
//             >
//               Go To Gameboard
//             </IonButton>
//           </IonCard>
//         </IonContent>
//       </IonApp>
//     </IonPage>
//   );
// };

// export default Home;
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
} from '@ionic/react';

import './Home.css';
import clue from '../components/clue.jpeg';
import { gameResult } from '../App';

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
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>
                Game Stats
              </IonCardTitle>
              <IonButton>Show Stats</IonButton>
            </IonCardHeader>

            <h3>Total Games Played: {gameResults.length}</h3>

            <IonGrid>
              {calculateLeaderBoard(uniquePlayers, gameResults)
                .sort((a, b) =>
                  b.winningPercentage.localeCompare(a.winningPercentage)
                )
                .map((x) => (
                  <IonRow>
                    <IonCol>{x.name}</IonCol>
                    <IonCol>{x.wins}</IonCol>
                    <IonCol>{x.losses}</IonCol>
                    <IonCol>{x.winningPercentage}</IonCol>
                  </IonRow>
                ))}
            </IonGrid>
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
          <IonButton routerLink='/setup'>Play</IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
