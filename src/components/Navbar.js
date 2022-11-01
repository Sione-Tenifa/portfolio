import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import logo from "../assets/sionelogo1.png";
import Nav from 'react-bootstrap/Nav';
import Navbarboot from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";




function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    // <div className="navbar" id={expandNavbar ? "open" : "close"}>
    //   <div className="toggleButton">
    //     <button
    //       onClick={() => {
    //         setExpandNavbar((prev) => !prev);
    //       }}
    //     >
    //       <ReorderIcon />
    //     </button>
    //   </div>
    //   <div className="links">
    //     <Link to='/'>
    //     <img className='img'src={logo} alt="logo" />
    //     </Link>
    //     <Link to="/"> Home </Link>
    //     <Link to="/projects"> Projects </Link>
    //     <Link to="/experience"> Experience </Link>
    //   </div>
    // </div>
    <Navbarboot className="navbar" expand="lg">
        <Container fluid>
          {/* <Navbarboot.Brand href="#home">React-Bootstrap</Navbarboot.Brand> */}
          <Nav.Link href="/">
          <img className='img'src={logo} alt="logo" />
          </Nav.Link>
          <Navbarboot.Toggle aria-controls="basic-navbar-nav" />
          <Navbarboot.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbarboot.Collapse>
        </Container>
      </Navbarboot>
  );
}

export default Navbar;
