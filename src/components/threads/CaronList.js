import React from "react";
import { Grid } from "@material-ui/core";
import CaronItem from "./CaronItem";
import { caron } from "./caron";

const SilkList = () => {
  const sortedCaron = caron.sort((a, b) => a.number - b.number);
  const allSilks = sortedCaron.map(silk => {
    return (
      <CaronItem
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
              <h5 style={{ margin: "5%" }}>Caron Waterlilies</h5>
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

export default SilkList;
