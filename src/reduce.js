const initialState = 0
const reduce = (state=initialState,action) => {
    if (action.type==="add") {
        return state+1
    }
    if (action.type==="minus"){
        return state-1
    }
    return state
} 

export default reduce;
