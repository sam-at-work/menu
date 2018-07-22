import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import burgers from "./data/burgers";
import drinks from "./data/drinks";
import "./Menu.css";

export const Menu = () => {
  console.log("render");
  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          <MenuSection
            sectionName={burgers.sectionName}
            sectionPath={"/burgers"}
            sectionColor={burgers.color}
            sectionItems={burgers.menuItems}
          />

          <MenuSection
            sectionName={drinks.sectionName}
            sectionPath={"/drinks"}
            sectionColor={drinks.color}
            sectionItems={drinks.menuItems}
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
  console.log('render');
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
              {sectionItems.map(item => <li key={item}>{item.name}</li>)}
            </ul>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
