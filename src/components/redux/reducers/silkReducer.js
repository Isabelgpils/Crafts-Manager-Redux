
const INITIAL_STATE = {
    currentSilk: null
}
const beadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SILK':
            return {
                ...currentState,
                silk: action.payload
            };
        default:
            return currentState;
    }
}

export default silkReducer; f