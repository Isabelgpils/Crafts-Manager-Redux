
const INITIAL_STATE = {
    currentMetallic: null
}
const metallicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BEAD':
            return {
                ...currentState,
                metallic: action.payload
            };
        default:
            return currentState;
    }
}

export default metallicReducer;