import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { init } from '@module-federation/enhanced/runtime';

import App from './app/app';

init({
  name: 'host',
  remotes: [
    {
      name: 'remote_a',
      entry: 'http://localhost:4200/mf-manifest.json'
    },
    {
      name: 'remote_b',
      entry: 'http://localhost:4201/mf-manifest.json'
    },
  ],
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
