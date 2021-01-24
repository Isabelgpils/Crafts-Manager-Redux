import React, { Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import style from "./style.css";
import DmcList from "../threads/DmcList";
import BeadList from "../beads/BeadList";
import GlorianaList from "../threads/GlorianaList";
import DinkyList from "../threads/DinkyList";
import CaronList from "../threads/CaronList";
import TGList from "../threads/TGList";
import ChatelaineList from "../patterns/ChatelaineList";
import MiraList from "../patterns/MiraList";
import SamplersList from "../patterns/SamplersList";
import MetallicList from "../metallics/MetallicList";
import SearchMetallics from "./SearchMetallics.js";
import SearchBeads from "./SearchBeads.js";
import SearchDMC from "./SearchDMC.js";
import dmc from "./dmc.png";

// import SignInForm from "../SignIn/SignInForm";


const Home = () => {
  return (
    <div>
      <h1 id="headline">Spend less time organizing and more time stitching. </h1>
      <h2 id="sub-headline">View and search threads, beads and cross stitch patterns.</h2>
      <img id="home-image" src={dmc} alt="dmc thread" />
      {/* <SignInForm /> */}

    </div>
  )
}


const Header = () => {
  return (
    <Fragment>

      {/*Dropdown Structure SEARCH*/}
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <Link to="/Search Beads">Search Beads</Link>
        </li>
        <li>
          <Link to="/Search Metallics">Search Metallics</Link>
        </li>
        <li>
          <Link to="/Search DMC">Search DMC</Link>
        </li>
      </ul>
      {/*Dropdown Structure THREADS*/}
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="/DMC">DMC Thread</Link>
        </li>
        <li>
          <Link to="/Dinky Dyes">Dinky Dyes</Link>
        </li>
        <li>
          <Link to="/Gloriana">Gloriana</Link>
        </li>
        <li>
          <Link to="/Caron Waterlilies">Caron Waterlilies</Link>
        </li>
        <li>
          <Link to="/Thread Gatherer">Thread Gatherer</Link>
        </li>
      </ul>
      {/*Dropdown Structure PATTERNS*/}
      <ul id="dropdown3" className="dropdown-content">
        <li>
          <Link to="/Chatelaine">Chatelaine</Link>
        </li>
        <li>
          <Link to="/Mirabilia">Mirabilia</Link>
        </li>
        <li>
          <Link to="/Samplers">Samplers</Link>
        </li>
      </ul>
      {/* Navbar */}
      <div className="navbar-fixed">
        <nav> {/*nav wrapper*/}
          <div className="nav-wrapper">  {/*LOGO*/}
            <div id="logo" className="brand-logo">
              Craft Manager
            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>

              {/*Dropdown Trigger SEARCH*/}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Search
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              {/*Dropdown Trigger THREADS*/}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown2"
                >
                  Thread
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              {/*Dropdown Trigger PATTERNS*/}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown3"
                >
                  Patterns
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <Link to="/Beads">Beads </Link>
              </li>
              <li>
                <Link to="/Metallics">Metallics</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/*SIDE NAVIGATION*/}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/Search Beads">Search Beads</Link>
        </li>
        <li>
          <Link to="/Search Metallics">Search Metallics</Link>
        </li>
        <li>
          <Link to="/Search DMC">Search DMC</Link>
        </li>
        <li>
          <Link to="/DMC">DMC Thread</Link>
        </li>
        <li>
          <Link to="/Dinky Dyes">Dinky Dyes</Link>
        </li>
        <li>
          <Link to="/Gloriana">Gloriana</Link>
        </li>
        <li>
          <Link to="/Caron Waterlilies">Caron Waterlilies</Link>
        </li>
        <li>
          <Link to="/Thread Gatherer">Thread Gatherer</Link>
        </li>
        <li>
          <Link to="/Chatelaine">Chatelaine</Link>
        </li>
        <li>
          <Link to="/Mirabilia">Mirabilia</Link>
        </li>
        <li>
          <Link to="/Samplers">Samplers</Link>
        </li>
      </ul>



      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route path="/Search Beads" component={SearchBeads}></Route>
        <Route path="/Search Metallics" component={SearchMetallics}></Route>
        <Route path="/Search DMC" component={SearchDMC}></Route>
        <Route path="/DMC" component={DmcList}></Route>
        <Route path="/Chatelaine" component={ChatelaineList}></Route>
        <Route path="/Mirabilia" component={MiraList}></Route>
        <Route path="/Samplers" component={SamplersList}></Route>
        <Route path="/Gloriana" component={GlorianaList}></Route>
        <Route path="/Dinky Dyes" component={DinkyList}></Route>
        <Route path="/Caron Waterlilies" component={CaronList}></Route>
        <Route path="/Thread Gatherer" component={TGList}></Route>
        <Route path="/Beads" component={BeadList}></Route>
        <Route path="/Metallics" component={MetallicList}></Route>
      </Switch>
    </Fragment>
  );
};

export default Header;
