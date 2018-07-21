import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
// import "./Menu.css";

import { MenuItem } from "./components/MenuItem";

const MenuItemLink = MenuItem.withComponent(Link);

const BasicExample = () => (
  <Router>
    <div>
      <ul className="menu-sections">
        <li>
          <Link to="/">Home</Link>
          <Route path="/" component={Home} />
        </li>
        <li style={{ backgroundColor: "blue" }}>
          <MenuItemLink to="/burgers">Burger</MenuItemLink>
          <Route path="/burgers" component={Burgers} />
        </li>
        <li style={{ backgroundColor: "orange" }}>
          <MenuItemLink to="/pizza">Pizza</MenuItemLink>
          <Route path="/pizza" component={Pizza} />
        </li>
        {/*<li>*/}
        {/*<Link to="/drinks">Drinks</Link>*/}
        {/*<Route path="/pizza" component={Drinks} />*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<Link to="/dessert">Dessert</Link>*/}
        {/*<Route path="/pizza" component={Dessert} />*/}
        {/*</li>*/}
      </ul>

      <hr />

      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title"> § Welcome to CRA with API demo §</h1>
        </header>
        {/*<p className="App-intro">{this.state.message}</p>*/}
        <p>Features:</p>
        <ul>
          <li>
            Server and client monorepo with
            <a href="https://yarnpkg.com/lang/en/docs/workspaces/">
              Yarn Workspaces.
            </a>
          </li>
          <li>
            Server and client deployed with{" "}
            <a href="https://zeit.co/now">Now</a>. The production build of CRA
            is served as static files from the same server as the API.
          </li>
          <li>
            Server code compiled with{" "}
            <a href="https://babeljs.io/docs/en/next">Babel 7</a>.
          </li>
        </ul>
      </div>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Burgers = () => (
  <ul class="menu-body">
    <li>Cheese Burger</li>
    <li>Chicken Burger</li>
  </ul>
);

const Pizza = () => (
  <ul className="menu-body">
    <li>Hawiaan</li>
    <li>Vege Supreme</li>
  </ul>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;

const Pizza2 = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
