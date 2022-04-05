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
} from '@ionic/react';
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
  const nav = useHistory();

  const checkedPlayers = uniquePlayers.map((x) => ({
    name: x,
    checked: false,
  }));
  const [sortedPlayers, setSortedPlayers] = useState(checkedPlayers);
  const [newPlayerName, setNewPlayerName] = useState('');

  // useEffect(() => {
  //   setSortedPlayers(
  //     uniquePlayers.map((x) => ({
  //       name: x,
  //       checked: false,
  //     }))
  //   );
  // }, [uniquePlayers]);

  const togglePlayerChecked = (p: any) => {
    setSortedPlayers(
      sortedPlayers.map((x) => ({
        ...x,
        checked: x === p ? !x.checked : x.checked,
      }))
    );
  };
  const addNewPlayer = () => {
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
    nav.push('/play');
  };
  console.log(sortedPlayers);
  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>
              Setup your next Mystery
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader className='ion-text-center'>
              Choose Detectives
            </IonCardHeader>
            <IonCardContent>
              <div>
                <IonItem>
                  <IonLabel position='floating'>Enter Detective Name</IonLabel>
                  <IonInput
                    value={newPlayerName}
                    onIonChange={(e) =>
                      setNewPlayerName((e.target as any).value)
                    }
                  ></IonInput>
                </IonItem>
                <IonButton expand='block' onClick={addNewPlayer}>
                  Add
                </IonButton>
              </div>
              {sortedPlayers.map((x) => (
                <IonItem>
                  <IonLabel>{x.name}</IonLabel>
                  <IonCheckbox
                    slot='start'
                    checked={x.checked}
                    onIonChange={(E) => togglePlayerChecked(x)}
                  />
                </IonItem>
              ))}
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>
              <IonButton
                className='ion-padding'
                color='danger'
                expand='full'
                onClick={startGame}
              >
                Start Playing
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default SetupGame;
