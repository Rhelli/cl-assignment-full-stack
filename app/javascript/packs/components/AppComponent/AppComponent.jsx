import React from 'react';
import Routes from '../../routes/Index';
import styles from './AppComponent.module.scss';

const AppComponent = () => (
  <main className={styles.appComponentContainer}>
    <div className={styles.appComponentMain}>
      <header>
        <h1>Participation Projects</h1>
      </header>
      <div className={styles.routesContainer}>
        <Routes />
      </div>
    </div>
  </main>
);

export default AppComponent;
