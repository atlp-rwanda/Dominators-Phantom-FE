import { GET_ALL_USERS, POST_ALL_USERS } from ".."


const initialState = {
    isLoading: false,
    isLoaded: false,
    data: [],
    error: {}
}

export default ( state=initialState, { type, payload } ) => { 
    switch ( type ) {
        case GET_ALL_USERS:
            return {
                ...state,
                isLoaded: true,
                data: payload
            }
        case POST_ALL_USERS:
            return {
                ...state,
                isLoaded: true,
                data: payload
            }

        default:
            return state;
    }
 }