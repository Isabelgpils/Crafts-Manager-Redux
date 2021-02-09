
const projectReducer = (state = null, action) => {
    console.log('reducer', state);
    switch (action.type) {
        case 'ADD_DMC':
            const prevDmcSelection = (state && state.selectDmc) || [];
            return { ...state, selectDmc: [...prevDmcSelection, action.payload] };
        case 'ADD_BEAD':
            const prevBeadSelection = (state && state.selectBead) || [];
            return { ...state, selectBead: [...prevBeadSelection, action.payload] };
        case 'ADD_SILK':
            const prevSilkSelection = (state && state.selectSilk) || [];
            return { ...state, selectSilk: [...prevSilkSelection, action.payload] };
        case 'ADD_METALLIC':
            const prevMetallicSelection = (state && state.selectMetallic) || [];
            return { ...state, selectMetallic: [...prevMetallicSelection, action.payload] };


        default:
            return state;
    }
};
export default projectReducer;