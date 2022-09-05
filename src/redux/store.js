import { createStore } from 'redux';
import { ADD_CONTACT } from './types';

const initialStore = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (store = initialStore.contacts, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = [...store.items, action.payload];

      return { ...store, items: newContact };
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
