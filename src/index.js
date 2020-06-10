import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import SearchBox from './SearchBox.js';

import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
	<App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();