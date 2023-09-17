import { createStore } from 'redux';
import gameReducer from './reducers/gameReducer';

const store = createStore(rootReducer);

export default store;