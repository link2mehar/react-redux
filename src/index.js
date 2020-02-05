import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
<Provider store={store}>
  <Router><App /></Router>

</Provider>, document.getElementById('root'));
console.log('initial state' , store.getState());
const unsubscribe = store.subscribe(()=>console.log('updated state' , store.getState()));
//store.dispatch(removeFromCart('f2fd0651-4842-4666-8b23-6d43006b4e1c'))
//localStorage.clear();

  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };

  store.subscribe(() => {
    saveState({
      cartItems: store.getState().cart
    });
  });



unsubscribe();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
