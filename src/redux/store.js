import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactItems/items-reduser';
import filterReducer from './filter/filter-reduser';

const store = configureStore({
  reducer: {
    items: contactsReducer,
    filter: filterReducer,
  },
});
// import rootReducer from './rootReducer';

// const store = configureStore(rootReducer);

export default store;
