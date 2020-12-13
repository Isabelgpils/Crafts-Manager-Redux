import React, { useState, Fragment } from "react";
import { beads } from "../beads/beads";
import { Grid } from "@material-ui/core";
import BeadItem from "../beads/BeadItem.js";

const SearchBeads = () => {
  const [search, setSearch] = useState("");

  const [items, setItems] = useState([]);

  const onSearchChange = event => setSearch(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    setItems(search);
  };
  const filteredBeads = beads.filter(bead => {
    const lowerCaseSearch = search.toLowerCase();
    const hasBeadNumber = (bead.number || "")
      .toLowerCase()
      .includes(lowerCaseSearch);
    const hasBeadColor = (bead.color || "")
      .toLowerCase()
      .includes(lowerCaseSearch);
    const hasBeadPattern = (bead.patterns || "")
      .toLowerCase()
      .includes(lowerCaseSearch);
    return hasBeadNumber || hasBeadColor || hasBeadPattern;
  });

  const allBeads = filteredBeads.map(bead => {
    return (
      <BeadItem
        key={bead.number}
        number={bead.number}
        patterns={bead.patterns}
        image={`https://cdn.shopify.com/s/files/1/0805/4511/products/DB${bead.number}_200x.jpeg?v=1568806569`}
      />
    );
  });

  return (
    <Fragment>
      {/* <div
        style={{
          textAlign: "left",
          margin: "0% 0% 5% 5%"
        }}
      ></div> */}
      {/* <div
        className="navbar fixed"
        style={{
          textAlign: "left",
          position: "sticky"
        }}
      ></div>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  type="text"
                  class="validate"
                  placeholder="Search..."
                  value={search}
                  onChange={onSearchChange}
                ></input>
              </div>
              <div className="input-field col s6">
                <button
                  className="waves-effect waves-light btn-small indigo"
                  type="submit"
                  name="action"
                  onSubmit={handleSubmit}
                >
                  Clear Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav> */}

      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#1ABC9C",
          color: "#2c3e50",
          padding: "1%"
        }}
      >
        <label
          style={{ fontSize: "24px", color: "white", marginTop: "3%" }}
          className="label"
          htmlFor="query"
        >
          {/* Search Beads */}
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="number, color, pattern"
          value={search}
          onChange={onSearchChange}
        />
      </form>
      <Grid container direction="column">
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
    </Fragment>
  );
};

{
  /* <Grid container direction="column">
        <Grid item>
          <Grid style={{ margin: "1%" }} item container />
          <Grid item xs={false} sm={2} /> */
}
{
  /* on xsmall screens=no gutter  */
}
{
  /* <Grid item xs={12}>
            <Grid item container>
              {allBeads}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </Fragment>
  );
}; */
}
export default SearchBeads;
