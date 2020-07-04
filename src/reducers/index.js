import { ADD_REMINDER } from '../constants';

const reminders = (state = [], action) => {
  switch(action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload,
        }
      ]
    default:
      return state;
  }
}

const remindersProReducer = (state = {}, action) => {
  return  {
    reminders: reminders(state.reminders, action),
  }
}

export default remindersProReducer;

// Reducers: funciones que reciben el state y una acción y devuelven un nuevo objeto state.