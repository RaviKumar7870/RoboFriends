import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import 'tachyons';
import { robot } from './robot'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<Card id ={robot[0].id} name = {robot[0].name} email = {robot[0].email}/>
		<Card id ={robot[1].id} name = {robot[1].name} email = {robot[1].email}/>
  		<Card id ={robot[2].id} name = {robot[2].name} email = {robot[2].email}/>
  		<Card id ={robot[3].id} name = {robot[3].name} email = {robot[3].email}/>

  	</div>

  ,document.getElementById('root')
);
serviceWorker.unregister();
