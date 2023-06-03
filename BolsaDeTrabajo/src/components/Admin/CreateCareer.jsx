import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { createCareer } from "../../api";
import { UserContext } from "../../context/UserContext";

const CreateCareer = () => {
    const [careerName, setCareerName] = useState("");
    const [careerAbbreviation, setCareerAbbreviation] = useState("");
    const [careerType, setCareerType] = useState("");
    const [careerTotalSubjects, setCareerTotalSubjects] = useState(1);
    const { user } = useContext(UserContext);

    const handleClickCreateCareer = async (e) => {
        e.preventDefault();
        try {
            const data = await createCareer({
                token: user.token,
                careerData: {
                    careerName: careerName,
                    careerAbbreviation: careerAbbreviation,
                    careerType: careerType,
                    careerTotalSubjects: careerTotalSubjects
                },
            });
        } catch (error){
            console.error(error);
            // handle error
        }
    };

    return (
        <Form onSubmit={handleClickCreateCareer}>
          <Form.Group controlId="careerName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introducir ombre de la carrera"
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
              placeholder="Prueba"
              value={careerType}
              onChange={(event) => setCareerType(event.target.value)}
            >
                <option value="" disabled>Seleccione un tipo de carrera</option>
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
        </Form>
      );
}
export default CreateCareer;