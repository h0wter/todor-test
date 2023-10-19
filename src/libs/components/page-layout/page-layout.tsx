import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Header } from '../header/header.js';
import { RouterOutlet } from '../router/router.js';
import styles from './styles.module.scss';

type Properties = {
  isHeaderHidden?: boolean;
};

const PageLayout: React.FC<Properties> = ({
  isHeaderHidden = false,
}: Properties) => {
  return (
    <>
      <div className={styles.container}>
        {!isHeaderHidden && (
          <div className={styles.header}>
            <Header />
          </div>
        )}
        <main className={styles.content}>
          <Suspense fallback={<p>Loading...</p>}>
            <RouterOutlet />
          </Suspense>
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export { PageLayout };
