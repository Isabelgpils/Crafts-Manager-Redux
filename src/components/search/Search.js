import React, { useState, Fragment } from 'react';
import DmcList from './threads/DmcList';
import PatternList from './patterns/PatternList';
import SearchBox from './search/SearchBox';
import { patterns } from './patterns/patterns';
import { dmcThreads } from './threads/dmc';
import { silks } from './threads/silks';
import { metallics } from './metallics/metallics';
import { beads } from './beads/beads';
import SilkList from './threads/SilkList';
import BeadList from './beads/BeadList';
import MetallicList from './metallics/MetallicList';
import { Link, Switch, Route } from 'react-router-dom';
// import ReduxApp from './redux/ReduxApp';
// class Search extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			threads: [],
// 			searchfield: ''
// 		};
// 	}
const Search = ({ searchfield }) => {
	const [ crafts, setCraft ] = useState('');

	// const onSearchChange = (event) => this.setState({ searchfield: event.target.value });
	const onSearchChange = (event) => crafts(event.target.value);

	const filteredThreads = dmcThreads.filter((thread) => {
		const lowerCaseSearch = (this.state.searchfield || '').toLowerCase();
		const hasColorName = (thread.color || '').toLowerCase().includes(lowerCaseSearch);
		const hasDMCNumber = (thread.dmc || '').toString().includes(lowerCaseSearch);
		return hasColorName || hasDMCNumber;
	});
	const filteredPatterns = patterns.filter((pattern) => {
		const lowerCaseSearch = (this.state.searchfield || '').toLowerCase();
		const hasPatternName = (pattern.name || '').toLowerCase().includes(lowerCaseSearch);
		const hasPatternBrand = (pattern.brand || '').toLowerCase().includes(lowerCaseSearch);
		return hasPatternName || hasPatternBrand;
	});
	const filteredSilks = silks.filter((silk) => {
		const lowerCaseSearch = (this.state.searchfield || '').toLowerCase();
		const hasSilkName = (silk.color || '').toLowerCase().includes(lowerCaseSearch);
		const hasSilkNumber = (silk.number || '').toString().includes(lowerCaseSearch);
		const hasSilkBrand = (silk.brand || '').toLowerCase().includes(lowerCaseSearch);
		return hasSilkName || hasSilkNumber || hasSilkBrand;
	});
	const filteredBeads = beads.filter((bead) => {
		const lowerCaseSearch = this.state.searchfield.toLowerCase();
		const hasbeadNumber = (bead.number || '').toLowerCase().includes(lowerCaseSearch);
		const hasbeadPattern = bead.patterns.toLowerCase().includes(lowerCaseSearch);
		return hasbeadNumber || hasbeadPattern;
	});
	const filteredMetallics = metallics.filter((metallic) => {
		const lowerCaseSearch = this.state.searchfield.toLowerCase();
		const hasMetallicNumber = metallic.number.includes(lowerCaseSearch);
		const hasMetallicPattern = metallic.patterns.toLowerCase().includes(lowerCaseSearch);
		return hasMetallicNumber || hasMetallicPattern;
	});

	return <SearchBox onSearchChange={setCraft.onSearchChange} />;
};
export default Search;
