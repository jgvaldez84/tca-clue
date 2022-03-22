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
import { useState } from 'react';
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

  const [sortedPlayers, setSortedPlayers] = useState(
    [...uniquePlayers].sort().map((x) => ({ name: x, checked: false }))
  );
  const [newPlayerName, setNewPlayerName] = useState('');

  const addNewPlayer = () => {
    setSortedPlayers(
      [
        ...sortedPlayers,
        {
          name: newPlayerName,
          checked: true,
        },
      ].sort((a, b) => a.name.localeCompare(b.name))
    );

    // Clears the text box.
    setNewPlayerName('');
  };

  const startGame = () => {
    setCurrentGame({
      players: [
        ...sortedPlayers
          .filter((x) => x.checked)
          .map((x, i) => ({
            name: x.name,
            order: i,
          })),
      ],
      start: new Date().toISOString(),
    });
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
              <IonItem>
                <IonLabel>Me</IonLabel>
                <IonCheckbox checked slot='start'></IonCheckbox>
              </IonItem>

              {sortedPlayers.map((x) => (
                <IonItem key={x.name}>
                  <IonLabel>{x.name}</IonLabel>
                  <IonCheckbox
                    slot='start'
                    value={x.name}
                    checked={x.checked}
                  />
                </IonItem>
              ))}
              <br></br>
              <IonItem>
                <input
                  type='text'
                  placeholder='enter name'
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName((e.target as any).value)}
                />
              </IonItem>
              <br></br>

              <IonButton color='warning' expand='full' onClick={addNewPlayer}>
                Add
              </IonButton>
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
