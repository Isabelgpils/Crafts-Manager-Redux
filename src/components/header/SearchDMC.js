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
      <div
        className="ui medium icon input focus"
        style={{
          margin: "3% 0% 0% 2%",
          maxWidth: "100px"
        }}
      >
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={onSearchChange}
        />
        <div className="ui basic buttons">
          {/* <div className="ui button" onSubmit={handleSubmit}>
            <i className="search icon"></i>
          </div> */}
          <div className="ui button" onClick={clearSearch}>
            <i className="close icon"></i>
          </div>
        </div>
      </div>
      <h6 style={{ color: "darkGrey", marginLeft: "2%" }}>
        <i>Search by color or number</i>
      </h6>
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
