// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/styles.scss';
import { loadEvents, getEvents } from './helpers/EVENT_DATA';

// ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));

loadEvents();
window.e = getEvents;
