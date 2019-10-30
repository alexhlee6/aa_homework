import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';


document.addEventListener("DOMContentLoaded", function(){
  document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
