import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import { applyMiddleware } from 'redux';

//PART ONE:
// const addLoggingToDispatch = function (store) {
//   const dispatchStore = store.dispatch;
//   return function (action) {
//     console.log(store.getState());
//     console.log(action);
//     dispatchStore(action);
//     console.log(store.getState());
//   }
// }


//PART TWO:
// const addLoggingToDispatch = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log(store.getState());
//       console.log(action);
//       next(action);
//       console.log(store.getState());
//     }
//   }
// }

// const applyMiddlewares = function (store, midWares) {
//   Object.freeze(store);
//   let dispatch = store.dispatch;
//   midWares.forEach(midWare => {
//     dispatch = midWare(store)(dispatch);
//   })
//   return Object.assign({}, store, { dispatch });
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  
  // store.dispatch = addLoggingToDispatch(store);
  // store = applyMiddlewares(store, [addLoggingToDispatch]);
  // console.log(newStore);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
