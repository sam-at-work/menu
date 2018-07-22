import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Menu.css";

/**
 * Making this a component will make it rerender when we change url so it can use
 * the correct value for "to".
 * PureComponent this wouldn't fwork
 */
class DynamicLink extends React.Component {
  render() {
    const { to, className, children } = this.props;
    const pathname = window.location.pathname;
    return (
      <Link className={`title ${className}`} to={pathname === to ? "" : to}>
        {children}
      </Link>
    );
  }
}

export const Menu = () => {
  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          <DynamicLink className="burgers" to="/burgers">
            Burgers
          </DynamicLink>
          <Route path={"/burgers"} component={Burgers} />
          <DynamicLink className="pizza" to="/pizza">
            Pizza
          </DynamicLink>
          <Route path={"/pizza"} component={Pizza} />
          <DynamicLink className="dessert" to="/dessert">
            Dessert
          </DynamicLink>
          <Route path={"/dessert"} component={Dessert} />
        </div>
      </div>
    </Router>
  );
};

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
