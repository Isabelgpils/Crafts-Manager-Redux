
const INITIAL_STATE = {
    currentMetallic: null
}
const metallicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BEAD':
            return {
                ...state,
                metallic: action.payload
            };
        default:
            return state;
    }
}

export default metallicReducer;