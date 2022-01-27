import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'; //import store
import { Provider } from 'react-redux'; //get store data in the component


const initialState={
  count:0
}


//create reducer
function reducer(state=initialState,actions){
  switch(actions.type){

    case 'ADD' :
      return {
        count:actions.payload.length
      }
    default : return state;
  }
}
const store = createStore(reducer); //crate  store

ReactDOM.render(
  <React.StrictMode>
    {/* Enclosed App.js in Provider like below */}
    <Provider store={store}> {/*Provider to  App.js file */}
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
