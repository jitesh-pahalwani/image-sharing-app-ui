import {combineReducers} from 'redux';
import homeScreenReducer from './components/HomeScreen/reducers/reducers';

const mainReducer = combineReducers({
  homeScreenReducer: homeScreenReducer
});

export default mainReducer;
