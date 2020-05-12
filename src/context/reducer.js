import { 
    SET_GAME, 
    SET_SINGLE_GAME, 
    SET_LOADING, 
    GAME_UPDATE } from "./action.types";

export default(state, action) => {
    switch(action.type){
        case SET_GAME:
            return action.payload == null ? {...state, games: []} 
            : {...state, games: action.payload}
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        case GAME_UPDATE:
            return {
                ...state,
                gameToUpdate: action.payload,
                gameToUpdateKey: action.key
            }
        case SET_SINGLE_GAME: 
        return {
            ...state,
            game: action.payload,
            gameKey: action.key 
        }
        default:
            return state;
    }
}
