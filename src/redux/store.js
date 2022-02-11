import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  pushReminderReducer,
  reminderReducer,
} from "./2 - reducers/ReminderReducers";

const reducer = combineReducers({
  addReminder: reminderReducer,
  pushReminder: pushReminderReducer,
});

const middleware = [thunk];

const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
