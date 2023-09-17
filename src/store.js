import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';

const rootReducer = combineReducers({
    game: gameReducer
})

const store = createStore(rootReducer);

export default store;