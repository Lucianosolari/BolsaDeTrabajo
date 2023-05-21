import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavStudent = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/form1">
      <Nav.Item>
        <Nav.Link as={Link} to="/addressStudent">
          Dirección
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/form2">
          Formulario 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/form3">
          Formulario 3
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavStudent;
