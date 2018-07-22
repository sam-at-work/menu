import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import "./Menu.css";

/**
 * Making this a component will make it rerender when we change url so it can use
 * the correct value for "to".
 * PureComponent this wouldn't fwork
 */
class DynamicLink extends React.Component {
  render() {
    console.log("rerender");
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
  console.log("render");
  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          {/*<DynamicLink className="burgers" to="/burgers">*/}
          {/*Burgers*/}
          {/*</DynamicLink>*/}
          {/*<Route path={"/burgers"} component={Burgers} />*/}
          <MenuSection
            color={"blue"}
            sectionName={"Burgers"}
            path={"/burgers"}
            menuItems={[
              "Philly Cheese Burger",
              "Mr Big Chicken",
              "Reuben Grilled Cheese"
            ]}
          />
          {/*<DynamicLink className="pizza" to="/pizza">*/}
          {/*Pizza*/}
          {/*</DynamicLink>*/}
          {/*<Route path={"/pizza"} component={Pizza} />*/}
          {/*<DynamicLink className="dessert" to="/dessert">*/}
          {/*Dessert*/}
          {/*</DynamicLink>*/}
          <Route path={"/dessert"} component={Dessert} />
        </div>
      </div>
    </Router>
  );
};

const MenuSection = ({ color, sectionName, path, menuItems }) => {
  const primaryStyles = { backgroundColor: color };
  return (
    <React.Fragment>
      <NavLink
        className="title"
        activeClassName="hide-active-menu"
        style={primaryStyles}
        to={path}
      >
        {sectionName}
      </NavLink>
      <Route
        path={path}
        render={() => (
          <React.Fragment>
            <Link className="title" style={primaryStyles} to="/">
              {sectionName}
            </Link>
            <ul className="scrollable-content" style={primaryStyles}>
              {menuItems.map(item => <li key={item}>{item}</li>)}
            </ul>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};

const Burgers = () => (
  <React.Fragment>
    <NavLink
      className="burgers title"
      to="/burgers"
      activeClassName="active-menu"
    >
      Burgers
    </NavLink>
    <Route
      path={"/burgers"}
      render={() => (
        <React.Fragment>
          <Link className="burgers title" to="/">
            Burgers
          </Link>
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
        </React.Fragment>
      )}
    />
  </React.Fragment>
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
