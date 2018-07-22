import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import burgers from "./data/burgers";
import pizza from "./data/pizza";
import drinks from "./data/drinks";

import "./Menu.css";
import { MenuItem } from "./components/MenuItem";

export const Menu = () => {
  console.log("render menu");
  return (
    <Router>
      <div className="outer-container">
        <div className="inner-container">
          <MenuSection sectionPath={"/burgers"} sectionData={burgers} />
          <MenuSection sectionPath={"/pizza"} sectionData={pizza} />
          <MenuSection sectionPath={"/drinks"} sectionData={drinks} />
        </div>
      </div>
    </Router>
  );
};

const MenuSection = ({
  sectionPath,
  sectionData: { sectionName, color: sectionColor, menuItems: sectionItems }
}) => {
  console.log("render");
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
              {sectionItems.map(item => (
                <li key={item.name}>
                  <MenuItem {...item} />
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
