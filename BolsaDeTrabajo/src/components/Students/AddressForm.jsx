import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AddressForm() {
  const [calle, setCalle] = useState("");
  const [numeroCalle, setNumeroCalle] = useState("");
  const [letraBis, setLetraBis] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDepto] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [telefonoParticular, setTelefonoParticular] = useState("");
  const [otroTelefono, setOtroTelefono] = useState("");

  // Manejadores de cambio de los campos
  const handleCalleChange = (e) => {
    setCalle(e.target.value);
  };

  const handleNumeroCalleChange = (e) => {
    setNumeroCalle(e.target.value);
  };

  const handleLetraBisChange = (e) => {
    setLetraBis(e.target.value);
  };

  const handlePisoChange = (e) => {
    setPiso(e.target.value);
  };

  const handleDeptoChange = (e) => {
    setDepto(e.target.value);
  };

  const handlePaisChange = (e) => {
    setPais(e.target.value);
  };

  const handleProvinciaChange = (e) => {
    setProvincia(e.target.value);
  };

  const handleLocalidadChange = (e) => {
    setLocalidad(e.target.value);
  };

  const handleTelefonoParticularChange = (e) => {
    setTelefonoParticular(e.target.value);
  };

  const handleOtroTelefonoChange = (e) => {
    setOtroTelefono(e.target.value);
  };

  return (
    <>
      <Form.Group as={Row} controlId="calle">
        <Form.Label column sm={2}>
          Calle
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la calle"
            value={calle}
            onChange={handleCalleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="numeroCalle">
        <Form.Label column sm={2}>
          Número de calle
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el número de la calle"
            value={numeroCalle}
            onChange={handleNumeroCalleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="letraBis">
        <Form.Label column sm={2}>
          Letra/Bis
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese la letra o bis (opcional)"
            value={letraBis}
            onChange={handleLetraBisChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="piso">
        <Form.Label column sm={2}>
          Piso
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el número de piso (opcional)"
            value={piso}
            onChange={handlePisoChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="depto">
        <Form.Label column sm={2}>
          Depto
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el número de departamento (opcional)"
            value={depto}
            onChange={handleDeptoChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="pais">
        <Form.Label column sm={2}>
          País
        </Form.Label>
        <Col sm={10}>
          <Form.Control as="select" value={pais} onChange={handlePaisChange}>
            <option value="">Seleccione un país</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            {/* Agregar más opciones de países */}
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="provincia">
        <Form.Label column sm={2}>
          Provincia
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la provincia"
            value={provincia}
            onChange={handleProvinciaChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="localidad">
        <Form.Label column sm={2}>
          Localidad
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la localidad"
            value={localidad}
            onChange={handleLocalidadChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="telefonoParticular">
        <Form.Label column sm={2}>
          Teléfono particular
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese su número de teléfono particular"
            value={telefonoParticular}
            onChange={handleTelefonoParticularChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="otroTelefono">
        <Form.Label column sm={2}>
          Otro teléfono
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Ingrese otro número de teléfono (opcional)"
            value={otroTelefono}
            onChange={handleOtroTelefonoChange}
          />
        </Col>
      </Form.Group>
    </>
  );
}
