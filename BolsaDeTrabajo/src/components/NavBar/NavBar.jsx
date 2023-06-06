import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import StudentMenu from "./StudentMenu";
import CompanyMenu from "./CompanyMenu";
import AdminMenu from "./AdminMenu";

const NavBar = () => {
  const { user } = useContext(UserContext);

  let content;
  if (!user) {
    content = (
      <Button as={Link} to="/login" variant="primary" size="lg">
        <FaUser size={20} />
      </Button>
    );
  } else {
    if (user.userType === "Student") {
      content = <StudentMenu />;
    } else if (user.userType === "Company") {
      content = <CompanyMenu />;
    } else if (user.userType === "Admin") {
      content = <AdminMenu/>
    }
  }

  return (
    <>
      <Navbar
        id="navbar"
        bg="light"
        expand="lg"
        fixed="top"
        className="bg-dark text-light py-3 mt-auto"
      >
        <Link to="/">
          <img src="./logo.png" alt="Logo de la Empresa" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex">
            {!user && (<Link to="/signInOption">Unite a la bolsa</Link>)}
            <Link to="/Offers">Ultimos empleos</Link>
            <Link to="/admin">Novedades</Link>
          </Nav>
          {content}
        </Navbar.Collapse>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
