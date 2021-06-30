import { SET_FLIGHT_DATA, GET_FLIGHT_DATA } from './actionTypes';

export const getFlightData = () => {
    return {
        type: GET_FLIGHT_DATA,
    };
};

export const setFlightData = (payload) => {
    console.log(payload, "payload in action")
    return {
        type: SET_FLIGHT_DATA,
        payload
    };
};