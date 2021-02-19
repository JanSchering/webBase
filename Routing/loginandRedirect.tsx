import React from "react";
import { Route, Redirect } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import { userService } from "./utilities/user.service";
import { history } from "./utilities/history";

/**
 * @description Eine Komponente, welche private Routen/Komponenten vor unerlaubten Zugriffen abschirmt.
 * Ist der anfragende Anwender eingeloggt, wird die private Route gerendert, ansonsten wird der Anwender auf die
 * Login-Seite geleitet.
 *
 * @param param0 Erwartet eine React-Komponente.
 */
const PrivateRoute = ({ component: Component, ...rest }): JSX.Element => {
  const handleLogout = () => {
    userService.logout();
    history.push("/login");
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <React.Fragment>
            <MDBBtn onClick={() => handleLogout()}>
              Logout
            </MDBBtn>
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
