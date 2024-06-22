import { 
    GET_MEDICINES,
    } from "../Action/action"

const initialState = {
    medecine : {},
    totalResults: []
    };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_MEDICINES :
            return {
                ...state,
                medecine : payload.results,
                totalResults : payload.meta.results.total, 
            }
        default: return state;
    }
}

export default rootReducer;