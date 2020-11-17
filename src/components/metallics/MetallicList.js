import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import MetallicItem from './MetallicItem';
import { metallics } from './metallics';


const MetallicList = (props) => {

    const sortedMetallics = metallics.sort((a, b) => (a.number - b.number))
    const allMetallics = sortedMetallics.map((metallic) => {
        return (
            <MetallicItem
                key={`${metallic.type}-${metallic.number} ${metallic.patterns}`}
                number={metallic.number}
                patterns={metallic.patterns}
                type={metallic.type}
                image={`https://www.123stitch.com/pictures/${props.type}${props.number}.jpg`}

            />
        );
    });


    return (
        <Fragment>

            <div className="row">
                <div className="col s12"><h3 style={{ marginTop: "55px" }} className="center-align">Rainbow Gallery Thread</h3></div>
            </div>

            <div style={{ margin: "100px" }}>
                <form className="form" onSubmit={setMetallics}>
                    <label className="label" htmlFor="query">Craft item</label>
                    <input className="input" type="text" name="query"
                        placeholder="search by type, number, pattern"
                        value={search} onChange={onSearchChange}
                    // value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <button className="button" type="submit">Search</button> */}
                </form>
            </div>

            <Grid container direction="column">
                <Grid container direction="column">
                    <Grid item>
                        <Grid item container />
                        <Grid item xs={false} sm={2} />
                        {/* on xsmall screens=no gutter  */}
                        <Grid item xs={12}>
                            <Grid item container>
                                {allMetallics}
                            </Grid>
                        </Grid>
                        <Grid item xs={false} sm={2} />
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default MetallicList;


