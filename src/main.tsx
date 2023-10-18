import 'modern-normalize/modern-normalize.css';
import './assets/css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './libs/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
