import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const NavBar = () => {
  // window.addEventListener("scroll", function () {
  //   var navbar = document.getElementById("navbar");
  //   if (window.scrollY > 0) {
  //     navbar.style.transform = "translateY(-100%)";
  //   } else {
  //     navbar.style.transform = "translateY(0)";
  //   }
  // });
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 0 && navbarVisible) {
      setNavbarVisible(false);
    } else if (scrolled === 0 && !navbarVisible) {
      setNavbarVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarVisible]);

  return (
    <>
      <Navbar
        id="navbar"
        bg="light"
        expand="lg"
        fixed="top"
        className={
          "bg-dark text-light py-3 mt-auto " +
          (navbarVisible ? "" : "scroll-down")
        }
      >
        <Link to="/">Logo de la Empresa</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/register">Registro</Link>
            <Link to="/studentsform">Alumnos</Link>
            <Link to="/admin">Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
