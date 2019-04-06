let isX = true;
const whoTurn = ()=>{
    isX = !isX    
    return isX ? "O" : "X"
}
export const clickSquare = (index)=>{
    console.log("S: " + index)
    return {
        type:"CLICK_SQUARE",
        index:index,
        t:whoTurn()
    }
}

export const addWinner = (winner)=>{
    return {
        type:"ADD_WINNER",
        winner:winner
    }
} 

export const resetSquareArray = () => ({
    type:"RESET_SQUARE_ARRAY"
})
