import { combineReducers } from 'redux'
function squareArr(state=[],action) {
    let newState = state.slice()
    switch(action.type){
        case "CLICK_SQUARE":
            newState[action.index] = action.t;
            return newState;
        case "RESET_SQUARE_ARRAY":
            return []
        default: 
            return state;
    }
}
function addWinner(state=[],action) {
    switch(action.type) {
        case "ADD_WINNER": 
        return [...state,action.winner];
        default:
            return state;
    }
}
function setWinner(state=null,action) {
    switch(action.type) {
        case "ADD_WINNER":
            return action.winner;
        case "RESET_SQUARE_ARRAY":
            return null
        default:
            return state;
    }
}

export default combineReducers({
    squareArr,
    addWinner,
    setWinner
})