import { SET_FLIGHT_DATA, GET_FLIGHT_DATA } from '..//action/actionTypes';

const INITIAL_STATE = {
    flights: []
};

const flightsData = (state = INITIAL_STATE, {type,payload}) => {
    switch (type) {
        case SET_FLIGHT_DATA:
            return {
                ...state, flights: payload,
            };

        case GET_FLIGHT_DATA:
            return {
                ...state,
            };

            default: return state;
    }
};

export default flightsData;