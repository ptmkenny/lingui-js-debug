import React from 'react';
import { Trans } from '@lingui/react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large"><Trans>Tab 1</Trans></IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Tab 1 page" />
    </IonContent>
  </IonPage>
);

export default Tab1;
