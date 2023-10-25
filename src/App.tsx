import { Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState } from 'react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AccountOverview from './pages/AccountOverview';
import card from '../src/assets/card.png'
import transfer from '../src/assets/transfer.png'
import chart from '../src/assets/chart.png'
import more from '../src/assets/more.png'
import Transfer from './pages/Transfer';
import Transactions from './pages/Transactions';

setupIonicReact();

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/">
          <AccountOverview />
        </Route>

        <Route exact path="/transfer">
          <Transfer />
        </Route>

        <Route exact path="/transactions">
          <Transactions />
        </Route>
      </IonRouterOutlet>
        <IonTabBar slot="bottom">
                <IonTabButton tab="/" href="/"
                className={activeTab === '/' ? 'active' : ''}
                onClick={() => setActiveTab('/')}
                >
                    <IonIcon  />
                    <IonLabel><img src={card} /></IonLabel>
                </IonTabButton>

                <IonTabButton tab="/transfer" href="/transfer"
                className={activeTab === '/transfer' ? 'active' : ''}
                onClick={() => setActiveTab('/transfer')}>
                    <IonIcon  />
                    <IonLabel><img src={transfer} /></IonLabel>
                </IonTabButton>

                <IonTabButton tab="/reports" href="/reports"
                className={activeTab === '/reports' ? 'active' : ''}
                onClick={() => setActiveTab('/reports')}>
                    <IonIcon />
                    <IonLabel><img src={chart} /></IonLabel>
                </IonTabButton>

                <IonTabButton tab="/more" href="/more"
                className={activeTab === '/more' ? 'active' : ''}
                onClick={() => setActiveTab('/more')}>
                    {/* <IonIcon icon={ellipsisHorizontalOutline} /> */}
                    <img src={more} className='more-tab'/>
                </IonTabButton>
          </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
};

export default App;
