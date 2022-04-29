import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonApp,
  IonCard,
  IonLabel,
  IonCheckbox,
  IonCardHeader,
  IonItem,
  IonList,
  IonActionSheet,
  IonGrid,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonCardContent,
} from '@ionic/react';
import { trash, close, glassesOutline, checkmarkCircle } from 'ionicons/icons';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router';
import clue from '../components/clue.jpeg';
import { useState, useRef } from 'react';

import './Home.css';

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  gameResults: gameResult[];
}

const PlayGame: React.FC<PlayGameProps> = ({ addGameResult, currentGame }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [checked] = useState(false);
  console.log('checked', checked);

  // const handleChange = (event: any) => {};

  const [characterCheckState, setCharacterCheckState] = useState(
    new Map([
      ['scarlet', true],
      ['mustard', true],
      ['white', true],
      ['green', true],
      ['peacock', true],
      ['plum', true],
    ])
  );

  const [roomCheckState, setRoomCheckState] = useState(
    new Map([
      ['ballroom', true],
      ['billiards', true],
      ['conservatory', true],
      ['dining', true],
      ['hall', true],
      ['kitchen', true],
      ['lounge', true],
      ['library', true],
      ['study', true],
    ])
  );

  const [weaponCheckState, setWeaponCheckState] = useState(
    new Map([
      ['knife', true],
      ['revolver', true],
      ['rope', true],
      ['wrench', true],
      ['candlestick', true],
      ['leadPipe', true],
    ])
  );

  const toggleCharacterCheckState = (character: string) => {
    const newState = new Map([...characterCheckState]);
    newState.set(character, !characterCheckState.get(character));
    setCharacterCheckState(newState);
  };

  const toggleRoomCheckState = (room: string) => {
    const newState = new Map([...roomCheckState]);
    newState.set(room, !roomCheckState.get(room));
    setRoomCheckState(newState);
  };

  const toggleWeaponCheckState = (weapon: string) => {
    const newState = new Map([...weaponCheckState]);
    newState.set(weapon, !weaponCheckState.get(weapon));
    setWeaponCheckState(newState);
  };

  const history = useHistory();

  const pageRef = useRef();

  return (
    <IonPage ref={pageRef}>
      <IonApp>
        <IonHeader>
          <IonToolbar color='hunter-green'>
            <IonTitle className='ion-text-center'>Who Dun It?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='dark' fullscreen>
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color='scarlet' className='ion-text-center'>
                Current Detectives:
              </IonCardTitle>
            </IonCardHeader>
            {currentGame.players.map((x) => (
              <IonGrid>
                <IonList lines='none'>
                  <IonChip outline color='success'>
                    <IonIcon icon={checkmarkCircle}></IonIcon>
                    <IonLabel color='success' key={x}>
                      {x}
                    </IonLabel>
                  </IonChip>
                </IonList>
              </IonGrid>
            ))}
          </IonCard>

          <IonCard color='medium' className='ion-text-center'>
            <IonCardHeader>
              <IonCardTitle>Characters</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='scarlet'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('scarlet')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Mrs. Scarlet
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('scarlet')}
                  onIonChange={() => toggleCharacterCheckState('scarlet')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='mustard'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('mustard')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Colonel Mustard
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('mustard')}
                  onIonChange={() => toggleCharacterCheckState('mustard')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='white'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('white')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Mrs. White
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('white')}
                  onIonChange={() => toggleCharacterCheckState('white')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='hunter-green'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('green')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Mr. Green
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('green')}
                  onIonChange={() => toggleCharacterCheckState('green')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('peacock')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Mrs. Peacock
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('peacock')}
                  onIonChange={() => toggleCharacterCheckState('peacock')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='plum'>
                <IonLabel
                  style={{
                    textDecoration: !characterCheckState.get('plum')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Professor Plum
                </IonLabel>
                <IonCheckbox
                  checked={characterCheckState.get('plum')}
                  onIonChange={() => toggleCharacterCheckState('plum')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Rooms</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('ballroom')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Ball Room
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('ballroom')}
                  onIonChange={() => toggleRoomCheckState('ballroom')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('billiards')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Billiard Room
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('billiards')}
                  onIonChange={() => toggleRoomCheckState('billiards')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('conservatory')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Conservatory
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('conservatory')}
                  onIonChange={() => toggleRoomCheckState('conservatory')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('dining')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Dining Room
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('dining')}
                  onIonChange={() => toggleRoomCheckState('dining')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('hall')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Hall
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('hall')}
                  onIonChange={() => toggleRoomCheckState('hall')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('kitchen')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Kitchen
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('kitchen')}
                  onIonChange={() => toggleRoomCheckState('kitchen')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('lounge')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Lounge
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('lounge')}
                  onIonChange={() => toggleRoomCheckState('lounge')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('library')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Library
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('library')}
                  onIonChange={() => toggleRoomCheckState('library')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel
                  style={{
                    textDecoration: !roomCheckState.get('study')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Study
                </IonLabel>
                <IonCheckbox
                  checked={roomCheckState.get('study')}
                  onIonChange={() => toggleRoomCheckState('study')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>

          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Weapons</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('knife')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Knife
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('knife')}
                  onIonChange={() => toggleWeaponCheckState('knife')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('revolver')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Revolver
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('revolver')}
                  onIonChange={() => toggleWeaponCheckState('revolver')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('rope')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Rope
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('rope')}
                  onIonChange={() => toggleWeaponCheckState('rope')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('wrench')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Wrench
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('wrench')}
                  onIonChange={() => toggleWeaponCheckState('wrench')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('candlestick')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Candlestick
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('candlestick')}
                  onIonChange={() => toggleWeaponCheckState('candlestick')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel
                  style={{
                    textDecoration: !weaponCheckState.get('leadPipe')
                      ? 'line-through'
                      : 'inherit',
                  }}
                >
                  Lead Pipe
                </IonLabel>
                <IonCheckbox
                  checked={weaponCheckState.get('leadPipe')}
                  onIonChange={() => toggleWeaponCheckState('leadPipe')}
                  color='primary'
                  slot='start'
                ></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard color='medium'>
            <IonButton onClick={() => setShowActionSheet(true)} expand='block'>
              Make Your Next Move
            </IonButton>
            <IonActionSheet
              isOpen={showActionSheet}
              onDidDismiss={() => setShowActionSheet(false)}
              cssClass='my-custom-class'
              buttons={[
                {
                  text: 'Did you get the criminal?',
                  icon: glassesOutline,
                  data: 'Data value',
                  handler: () => {
                    console.log('Play clicked');
                    history.push('/guess');
                  },
                },
                {
                  text: 'Quit',
                  role: 'destructive',
                  icon: trash,
                  id: 'delete-button',
                  data: {
                    type: 'delete',
                  },
                  handler: () => {
                    console.log('Delete clicked');
                    history.push('/');
                  },
                },

                {
                  text: 'Cancel',
                  icon: close,
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  },
                },
              ]}
            ></IonActionSheet>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default PlayGame;
