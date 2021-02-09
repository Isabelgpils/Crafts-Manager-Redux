
const INITIAL_STATE = {
    currentDMC: null
}
const dmcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_DMC':
            return {
                ...currentState,
                dmc: action.payload
            };
        default:
            return currentState;
    }
}

export default DMCReducer;