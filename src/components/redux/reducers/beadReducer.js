
const INITIAL_STATE = {
    currentBead: null
}
const beadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BEAD':
            return {
                ...state,
                bead: action.payload
            };
        default:
            return state;
    }
}

export default beadReducer;