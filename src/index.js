import App from './components/App';
import React from './core/React';
import { Change } from './components/Change';

const app = document.getElementById('root');
const prev = App();
React.render(prev, app);
setTimeout(() => React.updateDOM(app, prev, Change()), 3000);
