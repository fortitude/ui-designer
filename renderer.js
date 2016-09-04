/* global document */
/* eslint vars-on-top: "off" */

require('babel-register');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./src/views/App').default;

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(React.createElement(App), div);
