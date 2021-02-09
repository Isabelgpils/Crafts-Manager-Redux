//action creator for selecting DMC thread
export const addDmc = (dmc) => {
	return {
		type: 'ADD_DMC',
		payload: dmc
	};
};
//action creator for selecting beads
export const addBead = (bead) => {
	return {
		type: 'ADD_BEAD',
		payload: bead
	};
};
// action creator for selecting silk thread
export const addSilk = (silk) => {
	return {
		type: 'ADD_SILK',
		payload: silk
	};
};

// action creator for selecting metallics
export const addMetallic = (metallic) => {
	return {
		type: 'ADD_METALLIC',
		payload: metallic
	};
};

// action creator for selecting metallics
export const addPattern = (metallic) => {
	return {
		type: 'ADD_PATTERN',
		payload: pattern
	};
};
