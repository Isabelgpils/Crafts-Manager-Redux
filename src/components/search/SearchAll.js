import React, { useState, Fragment } from 'react';
import DmcList from '../threads/DmcList';
import PatternList from '../patterns/PatternList';
import SearchBox from './SearchBox';
import { patterns } from '../patterns/patterns';
import { dmcThreads } from '../threads/dmc';
import { silks } from '../threads/silks';
import { metallics } from '../metallics/metallics';
import { beads } from '../beads/beads';
import SilkList from '../threads/SilkList';
import BeadList from '../beads/BeadList';
import MetallicList from '../metallics/MetallicList';
import { Link, Switch, Route } from 'react-router-dom';
// import ReduxApp from './redux/ReduxApp';

const SearchAll = () => {

	const [searchfied, setSearchfield] = useState('');
	const [craft, setCraft] = useState([])

	const onSearchChange = e => setSearchfield(target.value);

	const filteredThreads = dmcThreads.filter((thread) => {
		const lowerCaseSearch = (value).toLowerCase();
		const hasColorName = thread.color.toLowerCase().includes(lowerCaseSearch);
		const hasDMCNumber = thread.dmc.toString().includes(lowerCaseSearch);
		return hasColorName || hasDMCNumber;
	});
	const filteredPatterns = patterns.filter((pattern) => {
		const lowerCaseSearch = { setSearchfield }.toLowerCase();
		const hasPatternName = pattern.name.toLowerCase().includes(lowerCaseSearch);
		const hasPatternBrand = pattern.brand.toLowerCase().includes(lowerCaseSearch);
		return hasPatternName || hasPatternBrand;
	});
	const filteredSilks = silks.filter((silk) => {
		const lowerCaseSearch = { setSearchfield }.toLowerCase();
		const hasSilkName = silk.color.toLowerCase().includes(lowerCaseSearch);
		const hasSilkNumber = silk.number.toString().includes(lowerCaseSearch);
		const hasSilkBrand = silk.brand.toLowerCase().includes(lowerCaseSearch);
		return hasSilkName || hasSilkNumber || hasSilkBrand;
	});
	const filteredBeads = beads.filter((bead) => {
		const lowerCaseSearch = { setSearchfield }.toLowerCase();
		const hasbeadNumber = bead.number.toLowerCase().includes(lowerCaseSearch);
		const hasbeadPattern = bead.patterns.toLowerCase().includes(lowerCaseSearch);
		return hasbeadNumber || hasbeadPattern;
	});
	const filteredMetallics = metallics.filter((metallic) => {
		const lowerCaseSearch = { setSearchfield }.toLowerCase();
		const hasmetallicNumber = metallic.number.includes(lowerCaseSearch);
		const hasmetallicColor = metallic.color.toLowerCase().includes(lowerCaseSearch);
		return hasmetallicColor || hasmetallicNumber;
	});

	return (
		<Fragment>
			<div style={{ marginLeft: '350px', marginTop: '5px' }}>
				{/* <ReduxApp /> */}
				<Link to="/">
					<button className="ui grey button">Home</button>
				</Link>
				<Link to="/DMC">
					<button className="ui violet button">DMC Thread</button>
				</Link>
				<Link to="/Patterns">
					<button className="ui blue button">Cross Stitch Patterns</button>
				</Link>
				<Link to="/Silks">
					<button className="ui olive button">Silk Thread</button>
				</Link>
				<Link to="/Beads">
					<button className="ui teal button">Beads</button>
				</Link>
				<Link to="/Metallics">
					<button className="ui green button">Metallics</button>
				</Link>
				<SearchBox onSearchChange={this.onSearchChange} />
			</div>
			<Switch>
				<Route path="/DMC">
					<DmcList filteredThreads={filteredThreads} />
				</Route>
				<Route path="/Patterns">
					<PatternList filteredPatterns={filteredPatterns} />
				</Route>
				<Route path="/Silks">
					<SilkList filteredSilks={filteredSilks} />
				</Route>

				<Route path="/Beads">
					<BeadList filteredBeads={filteredBeads} />
				</Route>
				<Route path="/Metallics">
					<MetallicList filteredMetallics={filteredMetallics} />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default SearchAll;
