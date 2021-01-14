import React from "react";
import { Grid } from "@material-ui/core";
import BeadItem from "./BeadItem";
import { beadsMain } from "./beadsMain";

const BeadList = props => {
  const sortedBeads = beadsMain.sort((a, b) => a.number - b.number);
  const allBeads = sortedBeads.map(bead => {
    return (
      <BeadItem
        key={bead.number}
        number={bead.number}
        message={bead.message}
        image={bead.image}
      />
    );
  });

  return (
    <Grid container direction="column">
      <div className="row">
        <div className="col s12">
          <h3 style={{ marginTop: "55px" }} className="align-left">
            Delica Seed Beads
          </h3>
        </div>
      </div>
      <Grid container direction="column">
        <Grid item>
          <Grid style={{ margin: "25px 50px" }} item container />
          <Grid item xs={false} sm={2} />
          {/* on xsmall screens=no gutter  */}
          <Grid item xs={12}>
            <Grid item container>
              {allBeads}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BeadList;
