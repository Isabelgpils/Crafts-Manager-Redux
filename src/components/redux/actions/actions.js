//action creator for selecting DMC thread
export const selectDmc = (dmc) => {
	return {
		type: 'DMC_SELECTED',
		payload: dmc
	};
};
//action creator for selecting beads
export const selectBead = (bead) => {
	return {
		type: 'BEAD_SELECTED',
		payload: bead
	};
};
// action creator for selecting silk thread
export const selectSilk = (silk) => {
	return {
		type: 'SILK_SELECTED',
		payload: silk
	};
};

// action creator for selecting metallics
export const selectMetallic = (metallic) => {
	return {
		type: 'METALLIC_SELECTED',
		payload: metallic
	};
};

// action creator for selecting metallics
export const selectPattern = (metallic) => {
	return {
		type: 'PATTERN_SELECTED',
		payload: pattern
	};
};
