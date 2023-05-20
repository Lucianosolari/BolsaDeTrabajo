import React, { useState, useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import { BiLogIn } from "react-icons/bi";
import { FaUser, FaCog } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const { setUser, user } = useContext(UserContext);
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
        <Link to="/">
          <img src="./logo.png" alt="Logo de la Empresa" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex">
            <Link to="/studentsform">Registrate</Link>
            <Link to="/Offers">Empleos</Link>
            <Link to="/admin">Admin</Link>
          </Nav>
        </Navbar.Collapse>
        {!user ? (
          <Button as={Link} to="/login" variant="primary" size="lg">
            <FaUser size={20} />
          </Button>
        ) : (
          <Button as={Link} to="/" variant="primary" size="lg">
            <FaCog className="fa fa-cog" aria-hidden="true" size={20} />
          </Button>
        )}
      </Navbar>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
