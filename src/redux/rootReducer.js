import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contactItems/items-reduser';
import filterReducer from './filter/filter-reduser';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
