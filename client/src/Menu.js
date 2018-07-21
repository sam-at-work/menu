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
    <div className="outer-container">
      <div className="inner-container">
        <NavLink className="title burgers" to="/burgers">
          Hamburgers
        </NavLink>
        <Route path={"/burgers"} component={Burgers} />
        <NavLink className="title pizza" to="/pizza">
          Pizza
        </NavLink>
        <Route path={"/pizza"} component={Pizza} />
        <NavLink className="title dessert" to="/dessert">
          Dessert
        </NavLink>
        <Route path={"/dessert"} component={Dessert} />
      </div>
    </div>
  </Router>
);

const Burgers = match => (
  <ul className="scrollable-content burgers">
    <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li>
    <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li> <li>Cheese Burger</li>
    <li>Chicken Burger</li>
    <li>asd</li>
  </ul>
);

const Pizza = () => (
  <ul className="scrollable-content pizza">
    <li>Hawiaan</li>
    <li>Vege Supreme</li>
    <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
    <li>Vege Supreme</li> <li>Hawiaan</li>
  </ul>
);

const Dessert = () => (
  <ul className="scrollable-content dessert">
    <li>Pavlova</li>
    <li>Ice Cream Sundae</li>
  </ul>
);
