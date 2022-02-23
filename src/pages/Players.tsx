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
} from '@ionic/react';

interface player {
  name: string; // "2022-02-14T18:49:30"
  order: number; // "2022-02-14T18:59:30"
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
            <IonButton>Add Checked Players</IonButton>
            <IonButton>Delete Checked Player</IonButton>
          </IonRow>
          <IonCol>
            <IonButton expand='block' color='secondary'>
              Add New Players
            </IonButton>
          </IonCol>
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
    </IonPage>
  );
};

export default Players;
