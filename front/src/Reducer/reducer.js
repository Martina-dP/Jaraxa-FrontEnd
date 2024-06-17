import { 
    GET_MEDICINES,
    } from "../Action/action"

const initialState = {
    medecine : {},
    };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_MEDICINES :
            return {
                ...state,
                medecine : payload.results,
            }
        default: return state;
    }
}

export default rootReducer;