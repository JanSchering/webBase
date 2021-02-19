import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from './shared/components/login/loginForm';
import { history } from './Routing/utilities/history';
import MDXDocument from '../../README.mdx';
import Intro from "../../../src/pages/Intro.mdx";
import SharedImages from "./shared/images/imgIndex"

const App = () => {
  return (
    <div style={{
    width: "100%",
    height: "max-content",
    backgroundImage: "url('" + SharedImages.NetGraphic + "')",
    padding: "0rem 0rem 100% 0rem !important",
    paddingBottom: "0% !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute"}}
    >
      <Router history={history}>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/readme">
            <MDXDocument />
          </Route>
          <Route exact path="">
            <Intro />
          </Route>
          {/*<PrivateRoute component={MDXDocument} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
