import React from 'react';
import ReactDOM from 'react-dom';
import App from './-components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Store: Estado de toda la aplicación.
// Provider: Componente que le da a la aplicación acceso al State.
// createStore: Función que en base a uno o más Reducers crea y devuelve un Store.