import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Link to="/">Logo de la Empresa</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/register">Registro</Link>
            <Link to="/student">Alumnos</Link>
            <Link to="/news">Novedades</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
      <Footer />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
