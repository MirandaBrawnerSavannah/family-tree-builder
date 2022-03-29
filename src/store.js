import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import data from './pages/API/data.json';

const startState = {
  people: [],
};

// This is called an action
export const initialPeople = () => {
  return {
    type: 'INITIAL_PEOPLE',
    people: data,
  };  
}

export const addPerson = (person) => {
  return {
    type: 'ADD_PERSON',
    person,
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INITIAL_PEOPLE': {
      return { ...state, people: action.people };
    }
    case 'ADD_PERSON': {
      const newListOfPeople = [...people, action.person];
      return { ...state, people: newListOfPeople };
    }
    default: return state;
  }
}

const store = (initialState = startState) => {
  return createStore(reducer, initialState);
}

export const initialStore = createWrapper(store);
