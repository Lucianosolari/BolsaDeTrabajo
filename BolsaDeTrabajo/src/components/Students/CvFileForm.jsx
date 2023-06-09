import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { uploadCV } from "../../api";

const CvFileForm = () => {
  const [cvFile, setCvFile] = useState(null);
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await uploadCV(user.token, cvFile);
      console.log(data); // Hacer algo con la respuesta exitosa
    } catch (error) {
      setError(error);
      console.log(error); // Manejar el error de alguna manera
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cvFile">
        <Form.Label>Archivo CV</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setCvFile(e.target.files[0])}
        />
        <Button type="submit">Cargar CV</Button>
      </Form.Group>
    </Form>
  );
};

export default CvFileForm;
