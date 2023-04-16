import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      {/* Utiliza la clase de estilo fixed-bottom para pegar el footer en la parte inferior de la ventana */}
      <Container fluid>
        <Row>
          <Col>
            {/* Contenido del footer */}
            <h4>Contacto</h4>
            <p>Información de contacto...</p>
          </Col>
          <Col>
            {/* Otros elementos del footer */}
            <h4>Otro elemento del footer</h4>
            <p>Contenido del elemento...</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
