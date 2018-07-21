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
    <div
      className={"menu-router"}
    >
      <NavLink
        to="/burgers"
        className="title"
        activeClassName="active-menu-page"
        style={{ backgroundColor: "red" }}
      >
        Hamburgers
      </NavLink>
      <NavLink
        to="/pizza"
        className="title"
        activeClassName="active-menu-page"
        style={{ backgroundColor: "blue" }}
      >
        Pizza
      </NavLink>
      <NavLink
        to="/dessert"
        className="title"
        activeClassName="active-menu-page"
        style={{ backgroundColor: "pink" }}
      >
        Dessert
      </NavLink>

      <Route path={"/burgers"} component={Burgers} />
      <Route path={"/pizza"} component={Pizza} />
      <Route path={"/dessert"} component={Dessert} />

    </div>


  </Router>
);

const Burgers = (match) => (
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

const Dessert  = () => (
  <ul className="menu-body">
    <li>Pavlova</li>
    <li>Ice Cream Sundae</li>
  </ul>
);
