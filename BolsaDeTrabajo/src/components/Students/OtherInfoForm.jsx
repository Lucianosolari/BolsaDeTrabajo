import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function OtherInfoForm() {
  const [tituloSecundario, setTituloSecundario] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [observaciones, setObservaciones] = useState("");

  const handleTituloSecundarioChange = (event) => {
    setTituloSecundario(event.target.value);
  };

  const handleCvFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleObservacionesChange = (event) => {
    setObservaciones(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    // o realizar validaciones
    console.log("Datos del formulario:");
    console.log("Título Secundario: ", tituloSecundario);
    console.log("Archivo CV: ", cvFile);
    console.log("Observaciones: ", observaciones);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="tituloSecundario">
          <Form.Label>Título Secundario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título secundario"
            value={tituloSecundario}
            onChange={handleTituloSecundarioChange}
          />
        </Form.Group>

        <Form.Group controlId="cvFile">
          <Form.Label>Archivo CV</Form.Label>
          <Form.Control type="file" onChange={handleCvFileChange} />
          <Button>Ver CV actual</Button>
          <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group controlId="observaciones">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese observaciones"
            value={observaciones}
            onChange={handleObservacionesChange}
          />
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}
