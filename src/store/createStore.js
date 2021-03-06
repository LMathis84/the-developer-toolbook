import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import counter from './reducers/ui';
import auth from './reducers/auth';

const rootReducer = combineReducers({
  counter: counter,
  auth: auth
});

// let composeEnhancers = compose;

const createStore = () => {
  // return reduxCreateStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return reduxCreateStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default createStore;