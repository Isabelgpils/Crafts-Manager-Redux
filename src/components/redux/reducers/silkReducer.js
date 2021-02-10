
const INITIAL_STATE = {
    currentSilk: null
}
const silkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SILK':
            return {
                ...state,
                silk: action.payload
            };
        default:
            return state;
    }
}

export default silkReducer; 