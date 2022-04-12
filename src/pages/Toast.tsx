/* Using the IonToast Component */

import React, { useState } from 'react';
import { IonToast, IonContent, IonButton } from '@ionic/react';

const ToastExample: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast1(true)} expand='block'>
        Show Toast 1
      </IonButton>

      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message='Your settings have been saved.'
        duration={2000}
      />
    </IonContent>
  );
};
export default ToastExample;
