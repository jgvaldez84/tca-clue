import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonImg,
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonInput,
  IonIcon,
} from '@ionic/react';

import { arrowBackSharp, lockOpenSharp } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { currentGame } from '../App';
import clue from '../components/clue.jpeg';

interface SetGameProps {
  uniquePlayers: string[];
  setCurrentGame: (game: currentGame) => void;
}

const SetupGame: React.FC<SetGameProps> = ({
  uniquePlayers,
  setCurrentGame,
}) => {
  const history = useHistory();

  const checkedPlayers = uniquePlayers.map((x) => ({
    name: x,
    checked: true,
  }));
  const [sortedPlayers, setSortedPlayers] = useState(checkedPlayers);
  const [newPlayerName, setNewPlayerName] = useState('');

  useEffect(() => {
    setSortedPlayers(
      uniquePlayers.map((x) => ({
        name: x,
        checked: true,
      }))
    );
  }, [uniquePlayers]);

  const togglePlayerChecked = (p: any) => {
    setSortedPlayers(
      sortedPlayers.map((x) => ({
        ...x,
        checked: x === p ? !x.checked : x.checked,
      }))
    );
  };
  const addNewPlayer = () => {
    // Prevent dupes.
    if (
      sortedPlayers.some(
        (x) =>
          x.name.toUpperCase().localeCompare(newPlayerName.toUpperCase()) === 0
      )
    ) {
      return;
    }
    if (sortedPlayers.some((x) => x.name).valueOf.length === 0) {
      alert('Nothing Entered');
      return false;
    }
    //Prevent blanks
    // if (
    //   sortedPlayers.some(
    //     (x) =>
    //       x.name.toUpperCase().localeCompare(newPlayerName.toUpperCase()) === ''
    //   )
    // ) {
    //   return;
    // }
    //add the new player to available players, default to checked as we are likely playing with a new player.
    setSortedPlayers([
      ...sortedPlayers,
      { name: newPlayerName, checked: true },
    ]);
    // clear out the input control.
    setNewPlayerName('');
  };
  const startGame = () => {
    // Setup the payers and the start timestamp.
    setCurrentGame({
      start: new Date().toISOString(),
      players: sortedPlayers.filter((x) => x.checked).map((x) => x.name),
    });
    // Nav to the play screen.
    history.push('/play');
    // const alert = () => {
    //   if (sortedPlayers.length < 2) {
    //     console.log('Not Enough Players');
    //   }
    //   if (sortedPlayers.length > 6) {
    //     console.log('Too many players');
    //   }
    // };
  };
  console.log(sortedPlayers);
  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='peacock'>
            <IonTitle className='ion-text-center'>
              Setup your next Mystery
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='hunter-green' fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard color='mustard'>
            <IonCardHeader color='mustard' className='ion-text-center'>
              <IonTitle>Choose Detectives</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='mustard'>
                <IonLabel position='floating'>Enter Detective Name</IonLabel>
                <IonInput
                  value={newPlayerName}
                  onIonChange={(e) => setNewPlayerName((e.target as any).value)}
                ></IonInput>
              </IonItem>

              <IonButton
                color='scarlet'
                className='ion-padding'
                expand='block'
                onClick={addNewPlayer}
                size='large'
              >
                Add
              </IonButton>
              <br></br>
              {sortedPlayers.map((x) => (
                <IonItem color='mustard'>
                  <IonLabel>{x.name}</IonLabel>
                  <IonCheckbox
                    slot='start'
                    checked={x.checked}
                    onIonChange={(e) => togglePlayerChecked(x)}
                  />
                </IonItem>
              ))}
            </IonCardContent>
          </IonCard>
          <IonCard color='mustard'>
            <IonCardHeader color='mustard' className='ion-text-center'>
              <IonTitle>Here We Go</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton
                className='ion-padding'
                color='scarlet'
                expand='block'
                onClick={startGame}
                fill='outline'
              >
                <IonIcon icon={lockOpenSharp}></IonIcon>
                &nbsp; Start Playing
              </IonButton>
              <IonButton
                className='ion-padding'
                color='scarlet'
                expand='block'
                routerLink='/'
              >
                <IonIcon icon={arrowBackSharp}></IonIcon>
                &nbsp; Go Back
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default SetupGame;
