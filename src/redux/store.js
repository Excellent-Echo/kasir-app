import {createStore,combineReducers} from 'redux';

import rootReducer from './reducers/rootReducer';

const store = createStore(combineReducers(rootReducer));

export default store;