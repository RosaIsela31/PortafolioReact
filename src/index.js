// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';
// import Modal from '../src/components/Modals/Modal1';

// Routes
import App from '../src/components/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();