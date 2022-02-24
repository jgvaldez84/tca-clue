import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonApp,
} from '@ionic/react';

interface player {
  name: string;
  order: number;
}
const players: player[] = [
  {
    name: 'Jose',
    order: 1,
  },
  {
    name: 'Colleen',
    order: 2,
  },
  {
    name: 'Kenny',
    order: 3,
  },
];

console.log(players);

const Players: React.FC = () => {
  const PlayersDisplay = players.map((x) => x.name);
  console.log(PlayersDisplay);

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Choose your Players</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItemDivider>This Game</IonItemDivider>
            <IonItem>
              <IonLabel>Me</IonLabel>
              <IonCheckbox checked={true} slot='start' color='primary' />
            </IonItem>
            <IonItemDivider>Previous Players</IonItemDivider>

            {players.map(({ name }, i) => (
              <IonItem key={i}>
                <IonLabel>{name}</IonLabel>
                <IonCheckbox slot='start' value={name} />
              </IonItem>
            ))}
          </IonList>
          <IonGrid>
            <IonRow>
              <IonCol size='6'>
                <IonButton fill='outline'>Add To Game</IonButton>
              </IonCol>
              <IonCol size='6'>
                <IonButton fill='outline'>Delete Player</IonButton>
              </IonCol>
            </IonRow>

            <IonButton expand='block' color='secondary'>
              Add New Players
            </IonButton>
          </IonGrid>

          <IonButton
            routerLink='play'
            expand='block'
            className='ion-text-center'
            color='tertiary'
          >
            Go To Check-off
          </IonButton>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Players;
