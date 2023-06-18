import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Router } from '~/router/router';
import { Spinner } from '~/ui/Spinner';
import { MenuFeature } from '~/features/MenuFeature';
import { TopBarFeature } from '~/features/TopBarFeature';

export const App: React.FC = () => {
  const [isSpinnerShow, setIsSpinnerShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpinnerShow(false);
    }, 300);
  }, []);

  return (
    <>
      {isSpinnerShow && <Spinner />}
      <div className={styles.wrap}>
        <div className={styles.left}>
          <MenuFeature />
        </div>
        <div className={styles.right}>
          <TopBarFeature />
          <main className={styles.main}>
            <Router />
          </main>
        </div>
      </div>
    </>
  );
};
