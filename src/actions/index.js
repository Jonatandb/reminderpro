import { ADD_REMINDER } from '../constants.js';

export const addReminder = text => {
  const action = {
    type: ADD_REMINDER,
    payload: text
  };
  return action;
}

// Actions: simples objetos javascript que deben posee una propiedad type y opcionalmente una payload.
// Action Creators: funciones que devuelven acciones.