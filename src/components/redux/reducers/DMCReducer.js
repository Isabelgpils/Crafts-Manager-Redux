
const INITIAL_STATE = {
    currentDMC: null
}
const DMCReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_DMC':
            return {
                ...state,
                dmc: action.payload
            };
        default:
            return state;
    }
}

export default DMCReducer;