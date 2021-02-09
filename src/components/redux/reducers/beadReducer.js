
const INITIAL_STATE = {
    currentBead: null
}
const beadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BEAD':
            return {
                ...currentState,
                bead: action.payload
            };
        default:
            return currentState;
    }
}

export default beadReducer;