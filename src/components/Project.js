import React from "react";
import { connect } from 'react-redux';
// import { project } from './redux/actions/actions/'
import { Grid } from "@material-ui/core";
import MetallicItem from "./metallics/MetallicItem";
import SilkItem from "./threads/SilkItem";
import BeadItem from "./beads/BeadItem";

const Project = (props) => {

  // const projectDmc = ({ dmcs, addDmc, state }) => {
  //   return dmcs.map((dmc) => {
  //     return (
  //       <div className="item" key={dmc.number}>
  //         <div className="right floated content">
  //           <button className="ui button" onClick={() => selectDmc(dmc)}>
  //             View Detail
  // 					</button>
  //         </div>
  //         <div className="content" style={{ padding: '1rem', backgroundColor: `rgb(${dmc.rgb})` }}>
  //           <h6>{dmc.dmc}</h6>
  //           <h6>{dmc.color}</h6>
  //         </div>
  //         <div>{state}</div>
  //       </div>
  //     );
  //   });
  // }

  const projectSilks = silks.map(silk => {
    return (
      <SilkItem
        key={`${silk.brand} ${silk.number}`}
        brand={silk.brand}
        number={silk.number}
        color={silk.color}
        rgb={silk.rgb}
        dmc={silk.dmc}
        dark={silk.dark}
      />
    );
  });

  const projectMetallics = metallics.map(metallic => {
    return (
      <MetallicItem
        key={`${metallic.type}-${metallic.number} ${metallic.patterns}`}
        number={metallic.number}
        patterns={metallic.patterns}
        type={metallic.type}
      />
    );
  });

  const projectBeads = beads.map(bead => {
    return (
      <BeadItem
        key={`${bead.number}${bead.patterns}`}
        number={bead.number}
        patterns={bead.patterns}
      />
    );
  });
  const projectDMC = dmc.map(dmc => {
    return (
      <MetallicItem
        key={`${dmc.number}${metallic.patterns}`}
        number={dmc.number}
        patterns={dmc.patterns}
      />
    );
  });

  return (
    <GridprojectMetallics
      container
      direction="column"
      style={{ marginTop: "25px", padding: "25px" }}
    >
      {/* Pattern Title */}
      <Grid item xs={12}>
        <Grid item container>
          <h5>French Kitchen Garden</h5>
        </Grid>
      </Grid>
      {/* Pattern Image */}
      <Grid item xs={12}>
        <Grid item container>
          <img
            src={portager2}
            alt="pattern"
            height="38%"
            width="38%"
            align="center"
          />
        </Grid>
      </Grid>
      {/* Silk Title */}
      <Grid item xs={12}>
        <Grid item container>
          <h5>Silk Threads</h5>
        </Grid>
      </Grid>
      {/* Silks */}
      <Grid item xs={12}>
        <Grid item container>
          {projectSilks}
        </Grid>
      </Grid>
      {/* Metallic Title */}
      <Grid item xs={12}>
        <Grid item container>
          <h5>Metallic Threads</h5>
        </Grid>
      </Grid>
      {/* Metallics */}
      <Grid item xs={12}>
        <Grid item container>
          {projectMetallics}
        </Grid>
      </Grid>
      {/* Beads */}
      <Grid item xs={12}>
        <Grid item container>
          <h5>Delica Beads</h5>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item container>
          {projectBeads}
        </Grid>
      </Grid>
    </Grid>

  );
};

const mapDispatchToProps = dispatch => ({
  setcurrentBeads: bead => dispatch(setCurrentBeads(bead))
});
export default connect(null, mapDispatchToProps)(Project);
