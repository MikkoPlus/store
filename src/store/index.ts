import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
