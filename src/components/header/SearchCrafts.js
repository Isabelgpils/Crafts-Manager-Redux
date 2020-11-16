import React, { useState, Fragment } from "react";
import { dmcThreads } from '../threads/dmc';
import { Grid } from '@material-ui/core';
import DmcItem from '../threads/DmcItem.js';


const SearchCrafts = (props) => {

    //states- input query, movies
    const [search, setSearch] = useState("");
    //create the state for movies, and update that state appropriate
    const [dmc, setDmc] = useState([]);

    const onSearchChange = (event) => setSearch(event.target.value);

    const filteredThreads = dmcThreads.filter((thread) => {
        const lowerCaseSearch = search.toLowerCase();
        const hasThreadNumber = (thread.dmc || "").toLowerCase().includes(lowerCaseSearch);
        const hasThreadColor = (thread.color || "").toLowerCase().includes(lowerCaseSearch);

        return hasThreadNumber || hasThreadColor;
    })

    const allThreads = filteredThreads.map((thread) => {
        return <DmcItem
            key={thread.dmc}
            dmc={thread.dmc}
            color={thread.color}
            image={`https://static1.dmc.com/cache/1/1/117mc_e_${props.dmc}_swatch_150x150.jpg`} />;
    });

    return (
        <fragment>
            <div>
                <form className="form" onSubmit={setDmc}>
                    <label className="label" htmlFor="query">Craft item</label>
                    <input className="input" type="text" name="query"
                        placeholder="dmc thread color or number"
                        value={search} onChange={onSearchChange}
                    // value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="button" type="submit">Search</button>
                </form>
            </div>

            <Grid container direction="column">
                <Grid item>
                    <Grid style={{ margin: '10px' }} item container />
                    <Grid item xs={false} sm={2} />
                    {/* on xsmall screens=no gutter  */}
                    <Grid item xs={12}>
                        <Grid item container>
                            {allThreads}
                        </Grid>
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>

        </fragment>
    )
}
export default SearchCrafts;

