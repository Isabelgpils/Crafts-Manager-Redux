import React, { useState, Fragment } from "react";
import { beads } from '../beads/beads';
import { Grid } from '@material-ui/core';
import BeadItem from '../beads/BeadItem.js';


const SearchBeads = () => {

    const [search, setSearch] = useState("");

    const [items, setItems] = useState([]);

    const onSearchChange = (event) => setSearch(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        setItems(search);

    }
    const filteredBeads = beads.filter(bead => {

        const lowerCaseSearch = search.toLowerCase();
        const hasBeadNumber = (bead.number || "").toLowerCase().includes(lowerCaseSearch);
        const hasBeadColor = (bead.color || "").toLowerCase().includes(lowerCaseSearch);
        const hasBeadPattern = (bead.patterns || "").toLowerCase().includes(lowerCaseSearch);
        return hasBeadNumber || hasBeadColor || hasBeadPattern;

    });

    const allBeads = filteredBeads.map((bead) => {
        return <BeadItem
            key={bead.number}
            number={bead.number}
            patterns={bead.patterns}
            image={`https://cdn.shopify.com/s/files/1/0805/4511/products/DB${bead.number}_200x.jpeg?v=1568806569`} />;
    });

    return (
        <Fragment>
            <div style={{ marginLeft: "15px" }}>
                <form className="form" onSubmit={handleSubmit}>

                    <label style={{ fontSize: "24px" }} className="label" htmlFor="query">Search</label>
                    <input className="input" type="text" name="query"
                        placeholder="number, pattern"
                        value={search} onChange={onSearchChange}
                    />
                </form>
            </div>

            <Grid container direction="column">
                <Grid item>
                    <Grid style={{ margin: '10px' }} item container />
                    <Grid item xs={false} sm={2} />
                    {/* on xsmall screens=no gutter  */}
                    <Grid item xs={12}>
                        <Grid item container>
                            {allBeads}
                        </Grid>
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default SearchBeads;

