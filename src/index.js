import React from 'react';
import ReactDOM from 'react-dom';
import reducer, { initialState } from "./components/Chat/reducer";
import { StateProvider } from "./components/Chat/StateProvider";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
