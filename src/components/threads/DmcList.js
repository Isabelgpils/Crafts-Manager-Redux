import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import DmcItem from "./DmcItem";
import { dmcThreads } from "./dmc";

const DmcList = props => {
  const sortedDMC = dmcThreads.sort((a, b) => a.dmc - b.dmc);
  const allThreads = sortedDMC.map(thread => {
    return (
      <DmcItem
        key={thread.dmc}
        dmc={thread.dmc}
        color={thread.color}
        image={`https://static1.dmc.com/cache/1/1/117mc_e_${props.dmc}_swatch_150x150.jpg`}
      />
    );
  });

  return (
    <Fragment>
      <Grid container direction="column">
        <div className="row">
          <div className="col s12">
            <h4 style={{ marginTop: "19%" }} className="center-align">
              DMC Cotton Thread
            </h4>
          </div>
        </div>
        <Grid item>
          <Grid item container style={{ marginLeft: "25, 50px" }} />
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
    </Fragment>
  );
};

export default DmcList;
