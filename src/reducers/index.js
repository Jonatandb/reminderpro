import { ADD_REMINDER } from '../constants';

const createReminder = action => {
  return {
    text: action.payload,
    id: Math.random(),
  }
}

const remindersReducer = (state = [], action) => {
  let newState = null;
  switch(action.type) {
    case ADD_REMINDER:
      newState = [...state, createReminder(action)];
      return newState;
    default:
      return state;
  }
}

export default remindersReducer;
// Reducers: funciones que reciben el state y una acción y devuelven un nuevo objeto state.