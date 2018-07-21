import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import "./Menu.css";

export const Menu = () => (
  <Router>
    <div className={"menu-router"}>
      <div style={{ backgroundColor: "blue" }}>
        <NavLink
          to="/burgers"
          className="title"
          activeClassName="active-menu-page"
        >
          Hamburgers
        </NavLink>
        <Route path={"/burgers"} component={Burgers} />
      </div>

      <div style={{ backgroundColor: "orange" }}>
        <NavLink
          to="/pizza"
          className="title"
          activeClassName="active-menu-page"
        >
          Pizza
        </NavLink>
        <Route path={"/pizza"} component={Pizza} />
      </div>

      <div style={{ backgroundColor: "pink" }}>
        <NavLink
          to="/dessert"
          className="title"
          activeClassName="active-menu-page"
        >
          Dessert
        </NavLink>
        <Route path={"/dessert"} component={Dessert} />
      </div>
    </div>
  </Router>
);

const Burgers = match => (
  <ul className="menu-body">
    <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li>
  </ul>
);

const Pizza = () => (
  <ul className="menu-body">
    <li>Hawiaan</li>
    <li>Vege Supreme</li>
  </ul>
);

const Dessert = () => (
  <ul className="menu-body">
    <li>Pavlova</li>
    <li>Ice Cream Sundae</li>
  </ul>
);
