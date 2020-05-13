import { combineReducers } from 'redux';

// import { selectDmc, selectBead } from '../actions';

//reducer to create a list of all materials

const beadsReducer = () => {
	return [
		//Dragonfly Tile
		{ number: '0010', patterns: 'Dragonfly Tile' },
		{ number: '0027', patterns: 'Dragonfly Tile' },
		{ number: '0052', patterns: 'Dragonfly Tile' },
		{ number: '0057', patterns: 'Dragonfly Tile' },
		{ number: '0084', patterns: 'Dragonfly Tile' },
		{ number: '0166', patterns: 'Dragonfly Tile' },
		{ number: '0285', patterns: 'Dragonfly Tile' },
		{ number: '0459', patterns: 'Dragonfly Tile' }
	];
}

const dmcsReducer = () => {
	return [
		//DELFT BLUE
		{ number: 800, color: 'Delft Blue Pale', rgb: [192, 204, 222], dark: false },
		{ number: 809, color: 'Delft Blue', rgb: [148, 168, 198], dark: false },
		{ number: 799, color: 'Delft Blue Medium', rgb: [116, 142, 182], dark: false },
		{ number: 98, color: 'Delft Blue Dark', rgb: [70, 106, 142], dark: false },
		//ROYAL BLUE
		{ number: 797, color: 'Royal Blue', rgb: [19, 71, 125], dark: true },
		{ number: 796, color: 'Royal Blue Dark', rgb: [17, 65, 109], dark: true },
		{ number: 820, color: 'Royal Blue Very Dark', rgb: [19, 16, 72], dark: true },
		//BLUE
		{ number: 162, color: 'Blue Ultra Very Light', rgb: [219, 236, 245], dark: false },
		{ number: 827, color: 'Blue Very Light', rgb: [189, 221, 237], dark: false },
		{ number: 813, color: 'Blue Light', rgb: [161, 194, 215], dark: false },
		{ number: 826, color: 'Blue Medium', rgb: [107, 158, 191], dark: false },
		{ number: 825, color: 'Blue Dark', rgb: [71, 129, 165], dark: true },
		{ number: 824, color: 'Blue Very Dark', rgb: [57, 105, 135], dark: true },
		{ number: 3843, color: 'Electric Blue', rgb: [20, 170, 208], dark: false },
		{ number: 995, color: 'Electric Blue Dark', rgb: [38, 150, 182], dark: true },
		//TURQUOISE
		{ number: 3846, color: 'Turquoise Bright Light', rgb: [6, 227, 230], dark: false },
		{ number: 3845, color: 'Turquoise Bright Med', rgb: [4, 196, 202], dark: false },
		{ number: 3844, color: 'Turquoise Bright Dark', rgb: [0, 129, 149], dark: false },
		//GRAY GREEN
		{ number: 928, color: 'Gray Green Vy Lt', rgb: [221, 227, 227], dark: false },
		{ number: 927, color: 'Gray Green Light', rgb: [189, 203, 203], dark: false },
		{ number: 926, color: 'Gray Green Med', rgb: [152, 174, 174], dark: false },
		{ number: 3768, color: 'Gray Green Dark', rgb: [101, 127, 127], dark: true },
		{ number: 924, color: 'Gray Green Vy Dark', rgb: [86, 106, 106], dark: true },
		//TEAL GREEN
		{ number: 3849, color: 'Teal Green Light', rgb: [82, 179, 164], dark: false },
		{ number: 3848, color: 'Teal Green Med', rgb: [85, 147, 146], dark: false },
		{ number: 3847, color: 'Teal Green Dark', rgb: [52, 125, 117], dark: true },
		//SEA GREEN
		{ number: 964, color: 'Sea Green Light', rgb: [169, 226, 216], dark: false },
		{ number: 959, color: 'Sea Green Med', rgb: [89, 199, 180], dark: false },
		{ number: 958, color: 'Sea Green Dark', rgb: [62, 182, 161], dark: false },
		{ number: 3812, color: 'Sea Green Vy Dk', rgb: [47, 140, 132], dark: false },
		//GREEN
		{ number: 3851, color: 'Green Bright Lt', rgb: [73, 179, 161], dark: false },
		{ number: 943, color: 'Green Bright Md', rgb: [61, 147, 132], dark: false },
		{ number: 3850, color: 'Green Bright Dk', rgb: [55, 132, 119], dark: false },
		//AQUAMARINE
		{ number: 993, color: 'Aquamarine Vy Lt', rgb: [144, 192, 180], dark: false },
		{ number: 992, color: 'Aquamarine Lt', rgb: [111, 174, 159], dark: false },
		{ number: 3814, color: 'Aquamarine', rgb: [52, 132, 113], dark: false },
		{ number: 991, color: 'Aquamarine Dk', rgb: [71, 123, 110], dark: false },
		//JADE
		{ number: 966, color: 'Jade Ultra Vy Lt', rgb: [185, 215, 192], dark: false },
		{ number: 564, color: 'Jade Very Light', rgb: [167, 205, 175], dark: false },
		{ number: 563, color: 'Jade Light', rgb: [143, 192, 152], dark: false },
		{ number: 562, color: 'Jade Medium', rgb: [83, 151, 106], dark: false },
		{ number: 505, color: 'Jade Green', rgb: [51, 131, 98], dark: false },
		//CELADON
		{ number: 3817, color: 'Celadon Green Lt', rgb: [153, 195, 170], dark: false },
		{ number: 3816, color: 'Celadon Green', rgb: [101, 165, 125], dark: false },
		{ number: 163, color: 'Celadon Green Md', rgb: [77, 131, 97], dark: false },
		{ number: 3815, color: 'Celadon Green Dk', rgb: [71, 119, 89], dark: false },
		{ number: 561, color: 'Celadon Green VD', rgb: [44, 106, 69], dark: false },
		//BLUE GREEN
		{ number: 504, color: 'Blue Green Vy Lt', rgb: [196, 222, 204], dark: false },
		{ number: 3813, color: 'Blue Green Lt', rgb: [178, 212, 189], dark: false },
		{ number: 503, color: 'Blue Green Med', rgb: [123, 172, 148], dark: false },
		{ number: 502, color: 'Blue Green', rgb: [91, 144, 113], dark: false },
		{ number: 501, color: 'Blue Green Dark', rgb: [57, 111, 82], dark: false },
		{ number: 500, color: 'Blue Green Vy Dark', rgb: [48, 68, 56], dark: true },
		//NILE GREEN
		{ number: 955, color: 'Nile Green Light', rgb: [162, 214, 173], dark: false },
		{ number: 954, color: 'Nile Green', rgb: [136, 186, 145], dark: false },
		{ number: 913, color: 'Nile Green Med', rgb: [109, 171, 119, 100], dark: false },
		//EMERALD
		{ number: 912, color: 'Emerald Green Lt', rgb: [27, 157, 107], dark: false },
		{ number: 911, color: 'Emerald Green Med', rgb: [24, 144, 101], dark: true },

		//SALMON
		{ number: 3713, color: 'Salmon Very Light', rgb: [255, 226, 226], dark: false },
		{ number: 761, color: 'Salmon Light', rgb: [248, 180, 173], dark: false },
		{ number: 760, color: 'Salmon', rgb: [236, 136, 128], dark: false },
		{ number: 3712, color: 'Salmon Medium', rgb: [217, 93, 93], dark: false },
		{ number: 3328, color: 'Salmon Dark', rgb: [227, 109, 109], dark: false },
		{ number: 347, color: 'Salmon Very Dark', rgb: [191, 45, 45], dark: false },
		//PEACH
		{ number: 353, color: 'Peach', rgb: [248, 121, 82, 0.74], dark: false },
		//CORAL
		{ number: 352, color: 'Coral Light', rgb: [253, 156, 151], dark: false },
		{ number: 351, color: 'Coral', rgb: [222, 73, 50], dark: false },
		{ number: 350, color: 'Coral Medium', rgb: [184, 34, 14], dark: false },
		{ number: 349, color: 'Coral Dark', rgb: [222, 46, 48], dark: false },
		{ number: 817, color: 'Coral Red Very Dark', rgb: [144, 26, 24], dark: true }
	];
};


const selectedReducer = (state = null, action) => {
	console.log('reducer', state);
	switch (action.type) {
		case 'DMC_SELECTED':
			const prevDmcSelection = (state && state.selectDmc) || [];
			return { ...state, selectDmc: [...prevDmcSelection, action.payload] };
		case 'BEAD_SELECTED':
			const prevBeadSelection = (state && state.selectBead) || [];
			return { ...state, selectBead: [...prevBeadSelection, action.payload] };
		case 'SILK_SELECTED':
			const prevSilkSelection = (state && state.selectSilk) || [];
			return { ...state, selectSilk: [...prevSilkSelection, action.payload] };
		case 'PATTERN_SELECTED':
			const prevPatternSelection = (state && state.selectPattern) || [];
			return { ...state, selectPattern: [...prevPatternSelection, action.payload] };


		default:
			return state;
	}
};


export default combineReducers({
	dmcs: dmcsReducer,
	beads: beadsReducer,
	selectedReducer: selectedReducer

});
