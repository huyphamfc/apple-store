import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from 'components';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
);
