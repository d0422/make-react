import App from './components/App';
import React from './core/React';
import { Change } from './components/Change';

const app = document.getElementById('root');
React.render(App(), app);
setTimeout(() => {
  app.innerHTML = '';
  React.render(Change(), app);
}, 3000);
