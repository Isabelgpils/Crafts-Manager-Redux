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
        <Grid item style={{ marginLeft: "5%" }}>
          <Grid item container>

            <Grid item xs={false} sm={2} />
            {/* on xsmall screens=no gutter  */}
            <Grid item xs={12}>
              <Grid item container style={{ margin: "auto" }}>
                <h3 style={{ margin: "5% auto" }}>DMC Thread</h3>
              </Grid>
            </Grid>
            <Grid item container>
              {allThreads}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DmcList;
