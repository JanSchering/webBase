import * as React from 'react';
import { MDBNavItem, MDBNavLink, MDBNavbarBrand, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBCollapse } from 'mdbreact';

/**
 * @description Creates the general Navigation Bar of the Application
 */
const Navbar = (): JSX.Element => {
  return (
    <React.Fragment>
      <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
        <MDBNavbarBrand href="/">
          <strong>JS</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/projects">Projects</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </React.Fragment>
  );
};

export default Navbar;
