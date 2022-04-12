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
  IonToast,
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
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [tooMany, setTooMany] = useState(false);
  const [notEnough, setNotEnough] = useState(false);
  const [noName, setNoName] = useState(false);
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
      setAlreadyAdded(true);
      return;
    }
    console.log(sortedPlayers);

    //Prevent blanks
    if (newPlayerName.length === 0) {
      setNoName(true);

      return;
    }

    //add the new player to available players, default to checked as we are likely playing with a new player.
    setSortedPlayers([
      ...sortedPlayers,
      { name: newPlayerName, checked: true },
    ]);
    // clear out the input control.
    setNewPlayerName('');
  };
  const startGame = () => {
    if (sortedPlayers.length < 3) {
      setNotEnough(true);
      console.log('Not Enough Players');
      return;
    }
    if (sortedPlayers.length > 6) {
      setTooMany(true);
      console.log('Too many players');
      return;
    }
    // Setup the payers and the start timestamp.
    setCurrentGame({
      start: new Date().toISOString(),
      players: sortedPlayers.filter((x) => x.checked).map((x) => x.name),
    });

    // Nav to the play screen.
    history.push('/play');
  };

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
                &nbsp; Begin the Investigation
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
          <IonToast
            isOpen={alreadyAdded}
            onDidDismiss={() => setAlreadyAdded(false)}
            color='danger'
            message='Name already added, please add a new detective'
            duration={1500}
          ></IonToast>
          <IonToast
            isOpen={noName}
            onDidDismiss={() => setNoName(false)}
            message='Please enter a name for the detective'
            color='danger'
            duration={1500}
          ></IonToast>
          <IonToast
            isOpen={tooMany}
            onDidDismiss={() => setTooMany(false)}
            color='danger'
            message='Only six detectives can investigate at a time'
            duration={1500}
          ></IonToast>
          <IonToast
            isOpen={notEnough}
            onDidDismiss={() => setNotEnough(false)}
            color='danger'
            message='At least three detectives are required to start investigating'
            duration={1500}
          ></IonToast>
          ;
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default SetupGame;
