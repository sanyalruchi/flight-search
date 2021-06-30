import { combineReducers } from 'redux';
import flightsData from './flightReducer';
const rootReducer = combineReducers({

    flightsData,

});

export default rootReducer;