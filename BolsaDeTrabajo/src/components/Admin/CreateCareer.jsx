import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useContext } from "react";
import { createCareer } from "../../api";
import { UserContext } from "../../context/UserContext";

const CreateCareer = () => {
  const [careerName, setCareerName] = useState("");
  const [careerAbbreviation, setCareerAbbreviation] = useState("");
  const [careerType, setCareerType] = useState("");
  const [careerTotalSubjects, setCareerTotalSubjects] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user } = useContext(UserContext);

  const handleClickCreateCareer = async (e) => {
    e.preventDefault();

    if (
      !careerName ||
      !careerAbbreviation ||
      !careerType ||
      !careerTotalSubjects
    ) {
      setError("Por favor, complete todos los campos.");
      setSuccess("");
      return;
    }
    setError(""); // Limpiar el mensaje de error
    setSuccess(""); // Limpiar el mensaje de éxito

    try {
      const data = await createCareer({
        token: user.token,
        careerData: {
          careerName: careerName,
          careerAbbreviation: careerAbbreviation,
          careerType: careerType,
          careerTotalSubjects: careerTotalSubjects,
        },
      });

      // Clear the form fields and display success message
      setCareerName("");
      setCareerAbbreviation("");
      setCareerType("");
      setCareerTotalSubjects(1);
      setSuccess("¡Carrera creada exitosamente!");
    } catch (error) {
      console.error(error);
      // Handle error
      setError("Error al crear la carrera. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <Form onSubmit={handleClickCreateCareer}>
      <Form.Group controlId="careerName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Introducir nombre de la carrera"
          value={careerName}
          onChange={(event) => setCareerName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="careerAbbreviation">
        <Form.Label>Abreviación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Introducir abreviación"
          value={careerAbbreviation}
          onChange={(event) => setCareerAbbreviation(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="careerType">
        <Form.Label>Tipo</Form.Label>
        <Form.Control
          as="select"
          value={careerType}
          onChange={(event) => setCareerType(event.target.value)}
        >
          <option value="" disabled>
            Seleccione un tipo de carrera
          </option>
          <option value="Tecnicatura">Tecnicatura</option>
          <option value="Posgrado">Posgrado</option>
          <option value="Maestria">Maestría</option>
          <option value="Grado">Grado</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="careerTotalSubjects">
        <Form.Label>Total de materias</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Ingrese el total de materias"
          value={careerTotalSubjects}
          onChange={(event) => setCareerTotalSubjects(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear Carrera
      </Button>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
    </Form>
  );
};

export default CreateCareer;
