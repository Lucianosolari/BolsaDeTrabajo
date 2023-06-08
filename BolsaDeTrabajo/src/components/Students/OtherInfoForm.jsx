import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { updateStudentOtherInfo } from "../../api";

export default function OtherInfoForm() {
  const [secondaryDegree, setSecondaryDegree] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [observations, setObservations] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await updateStudentOtherInfo({
        secondaryDegree: secondaryDegree,
        cvFile: cvFile,
        observations: observations
      })
    } catch (e) {
      setError(e);
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="secondaryDegree">
          <Form.Label>Título Secundario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título secundario"
            value={secondaryDegree}
            onChange={(e) => setSecondaryDegree(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="cvFile">
          <Form.Label>Archivo CV</Form.Label>
          <Form.Control type="file" onChange={(e) => setCvFile(e.target.files[0])} />
          <Button>Ver CV actual</Button>
          <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group controlId="observations">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese observations"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}
