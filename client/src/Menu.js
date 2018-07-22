import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import "./Menu.css";

export const Menu = () => {
  console.log("render");
  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          <MenuSection
            sectionName={"Burgers"}
            sectionPath={"/burgers"}
            sectionColor={"blue"}
            sectionItems={[
              "Philly Cheese Burger",
              "Mr Big Chicken",
              "Reuben Grilled Cheese"
            ]}
          />
        </div>
      </div>
    </Router>
  );
};

const MenuSection = ({
  sectionColor,
  sectionName,
  sectionPath,
  sectionItems
}) => {
  const primaryStyles = { backgroundColor: sectionColor };
  return (
    <React.Fragment>
      <NavLink
        className="title"
        activeClassName="hide-active-navlink"
        style={primaryStyles}
        to={sectionPath}
      >
        {sectionName}
      </NavLink>

      <Route
        path={sectionPath}
        render={() => (
          <React.Fragment>
            <Link className="title" style={primaryStyles} to="/">
              {sectionName}
            </Link>

            <ul className="scrollable-content" style={primaryStyles}>
              {sectionItems.map(item => <li key={item}>{item}</li>)}
            </ul>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
