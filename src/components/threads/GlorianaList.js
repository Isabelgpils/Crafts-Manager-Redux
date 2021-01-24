import React from "react";
import { Grid } from "@material-ui/core";
import ThreadItem from "./ThreadItem";
import { gloriana } from "./gloriana";

const GlorianaList = () => {
  const sortedSilks = gloriana.sort((a, b) => a.number - b.number);
  const allSilks = sortedSilks.map(silk => {
    return (
      <ThreadItem
        key={`${silk.brand} ${silk.color}`}
        brand={silk.brand}
        number={silk.number}
        color={silk.color}
        rgb={silk.rgb}
        dmc={silk.dmc}
        dark={silk.dark}
        image={silk.image}
      />
    );
  });

  return (
    <Grid container direction="column">
      <Grid item style={{ marginLeft: "5%" }}>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          {/* on xsmall screens=no gutter  */}
          <Grid item xs={12}>
            <Grid item container style={{ margin: "auto" }}>
              <h3 style={{ margin: "5% auto" }}>Gloriana</h3>
            </Grid>
          </Grid>
          <Grid item container>
            {allSilks}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GlorianaList;
