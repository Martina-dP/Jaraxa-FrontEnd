import axios from "axios";

export const GET_MEDICINES = "GET_MEDICINES";

const basicURL = 'https://api.fda.gov/drug/event.json'

export function getMedicines() {
    return async function(dispatch){
        var json = await axios.get(`${basicURL}?limit=5`)
        return dispatch({
            type : "GET_MEDICINES",
            payload : json.data
        })
    }
}