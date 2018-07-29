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
import desserts from "./data/desserts";

import "./Menu.css";
import { MenuItem } from "./components/MenuItem";

export const Menu = () => {
  console.log("render menu");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="outer-container">
        <div className="inner-container">
          <MenuSection sectionData={burgers} />
          <MenuSection sectionData={pizza} />
          <MenuSection sectionData={drinks} />
          <MenuSection sectionData={desserts} />
        </div>
      </div>
    </Router>
  );
};

const MenuSection = ({
  sectionPrefix = "",
  sectionData: {
    sectionPath,
    sectionName,
    color: sectionColor,
    menuItems: sectionItems,
    subSections
  }
}) => {
  const primaryStyles = { backgroundColor: sectionColor };

  console.log(sectionItems);

  let content;
  if (sectionItems) {
    content = (
      <ul className="scrollable-content" style={primaryStyles}>
        {sectionItems.map(item => (
          <li key={item.name}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    );
  } else if (subSections) {
    content = subSections.map(subSection => (
      <MenuSection
        sectionData={subSection}
        sectionPrefix={sectionPath}
        key={subSection.sectionName}
      />
    ));
  }

  return (
    <React.Fragment>
      <NavLink
        className="title"
        activeClassName="hide-active-navlink"
        style={primaryStyles}
        to={sectionPrefix + sectionPath}
      >
        {sectionName}
      </NavLink>

      <Route
        path={sectionPrefix + sectionPath}
        render={() => (
          <React.Fragment>
            <Link className="title" style={primaryStyles} to={sectionPrefix}>
              {sectionName}
            </Link>
            {content}
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
