import React, { Fragment, useState } from 'react';
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


const SearchAll = () => {

    const [dmc, setDMC] = useState([]);
    const [silk, setSilk] = useState([]);
    const [bead, setBead] = useState([]);
    const [metallic, setMetallic] = useState([]);
    const [pattern, setPattern] = useState([])
    const [search, setSearch] = useState('');


    const onSearchChange = (event) => setSearch(event.target.value);

    const filteredDmc = dmcThreads.filter((thread) => {
        const lowerCaseSearch = setSearch.toLowerCase();
        const hasColorName = (thread.color || '').toLowerCase().includes(lowerCaseSearch);
        const hasDMCNumber = (thread.dmc || '').toString().includes(lowerCaseSearch);
        return setDMC(hasColorName || hasDMCNumber);
    });
    const filteredPatterns = patterns.filter((pattern) => {
        const lowerCaseSearch = setSearch.toLowerCase();
        const hasPatternName = (pattern.name || '').toLowerCase().includes(lowerCaseSearch);
        const hasPatternBrand = (pattern.brand || '').toLowerCase().includes(lowerCaseSearch);
        return setPattern(hasPatternName || hasPatternBrand);
    });
    const filteredSilks = silks.filter((silk) => {
        const lowerCaseSearch = setSearch.toLowerCase();
        const hasSilkName = (silk.color || '').toLowerCase().includes(lowerCaseSearch);
        const hasSilkNumber = (silk.number || '').toString().includes(lowerCaseSearch);
        const hasSilkBrand = (silk.brand || '').toLowerCase().includes(lowerCaseSearch);
        return setSilk(hasSilkName || hasSilkNumber || hasSilkBrand);
    });
    const filteredBeads = beads.filter((bead) => {
        const lowerCaseSearch = setSearch.toLowerCase();
        const hasbeadNumber = (bead.number || '').toLowerCase().includes(lowerCaseSearch);
        const hasbeadPattern = bead.patterns.toLowerCase().includes(lowerCaseSearch);
        return setBead(hasbeadNumber || hasbeadPattern);
    });
    const filteredMetallics = metallics.filter((metallic) => {
        const lowerCaseSearch = setSearch.toLowerCase();
        const hasmetallicNumber = metallic.number.includes(lowerCaseSearch);
        const hasmetallicColor = metallic.color.toLowerCase().includes(lowerCaseSearch);
        return setMetallic(hasmetallicColor || hasmetallicNumber);
    });
    return (
        <Fragment>
            <div style={{ marginLeft: '350px', marginTop: '5px' }}>

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
                <SearchBox onSearchChange={onSearchChange} />
            </div>
            <Switch>

                <Route path="/DMC">
                    <DmcList setDMC={setDMC} />
                </Route>
                <Route path="/Patterns">
                    <PatternList setPattern={setPattern} />
                </Route>
                <Route path="/Silks">
                    <SilkList setSilk={setSilk} />
                </Route>

                <Route path="/Beads">
                    <BeadList setBead={setBead} />
                </Route>
                <Route path="/Metallics">
                    <MetallicList setMetallic={setMetallic} />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default SearchAll;
