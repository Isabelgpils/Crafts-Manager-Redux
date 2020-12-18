import React, { useState, Fragment } from "react";
import { dmcThreads } from "../threads/dmc";
import { Grid } from "@material-ui/core";
import DmcItem from "../threads/DmcItem.js";
import { darkslategrey } from "color-name";

const SearchCrafts = () => {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  const onSearchChange = event => setSearch(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setItem(search);
  };
  const clearSearch = event => setSearch("");

  const filteredThreads = dmcThreads.filter(item => {
    const lowerCaseSearch = search.toLowerCase();
    const hasThreadNumber = item.dmc
      .toString()
      .toLowerCase()
      .includes(lowerCaseSearch);
    const hasThreadColor = (item.color || "")
      .toLowerCase()
      .includes(lowerCaseSearch);
    return hasThreadNumber || hasThreadColor;
  });

  const allItems = filteredThreads.map(item => {
    return (
      <DmcItem
        key={item.dmc}
        dmc={item.dmc}
        color={item.color}
        image={`https://static1.dmc.com/cache/1/1/117mc_e_${item.dmc}_swatch_150x150.jpg`}
      />
    );
  });

  return (
    <Fragment>
      <div>
        <form
          className="form"
          onSubmit={handleSubmit}
          style={{
            // backgroundColor: "#1ABC9C",
            // color: "#2c3e50",
            padding: "1%"
          }}
        >
          <label
            style={{ fontSize: "24px", color: "white", marginTop: "3%" }}
            className="label"
            htmlFor="query"
          ></label>
          <input
            className="input"
            type="text"
            name="query"
            placeholder="Search by number or color"
            value={search}
            onChange={onSearchChange}
          />
          <button onClick={clearSearch}>
            {/* <i className="material-icons" style={{ display: "inlineBlock" }}>
            close
          </i> */}
            Clear Search
          </button>
        </form>
      </div>

      <Grid container direction="column">
        <Grid item>
          <Grid item container />
          <Grid item xs={false} sm={2} />
          {/* on xsmall screens=no gutter  */}
          <Grid item xs={12}>
            <Grid item container>
              {allItems}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default SearchCrafts;
