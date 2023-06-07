import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UniversityInfoForm() {
  const [specialty, setSpecialty] = useState("");
  const [approvedSubjectsQuantity, setApprovedSubjectsQuantity] = useState(0);
  const [specialtyPlan, setSpecialtyPlan] = useState("");
  const [currentStudyYear, setCurrentStudyYear] = useState("");
  const [studyTurn, setStudyTurn] = useState("");
  const [averageMarksWithPostponement, setAverageMarksWithPostponement] = useState("");
  const [averageMarksWithoutPostponement, setAverageMarksWithoutPostponement] = useState("");
  const [collegeDegree, setCollegeDegree] = useState("");

  const handleEspecialidadChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handleCantidadMateriasChange = (e) => {
    setApprovedSubjectsQuantity(e.target.value);
  };

  const handlePlanEspecialidadChange = (e) => {
    setSpecialtyPlan(e.target.value);
  };

  const handleAnioCursaChange = (e) => {
    setCurrentStudyYear(e.target.value);
  };

  const handleTurnoCursaChange = (e) => {
    setStudyTurn(e.target.value);
  };

  const handlePromedioConAplazoChange = (e) => {
    setAverageMarksWithPostponement(e.target.value);
  };

  const handlePromedioSinAplazoChange = (e) => {
    setAverageMarksWithoutPostponement(e.target.value);
  };

  const handleTituloUniversitarioChange = (e) => {
    setCollegeDegree(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="specialty">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la specialty"
            value={specialty}
            onChange={handleEspecialidadChange}
          />
        </Form.Group>

        <Form.Group controlId="approvedSubjectsQuantity">
          <Form.Label>Cantidad de Materias aprobadas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese la cantidad de materias aprobadas"
            value={approvedSubjectsQuantity}
            onChange={handleCantidadMateriasChange}
          />
        </Form.Group>

        <Form.Group controlId="specialtyPlan">
          <Form.Label>Plan de Especialidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el plan de specialty"
            value={specialtyPlan}
            onChange={handlePlanEspecialidadChange}
          />
        </Form.Group>

        <Form.Group controlId="currentStudyYear">
          <Form.Label>Año que Cursa</Form.Label>
          <Form.Control
            as="select"
            value={currentStudyYear}
            onChange={handleAnioCursaChange}
          >
            <option value="">Seleccione</option>
            <option value="1">1° Año</option>
            <option value="2">2° Año</option>
            <option value="3">3° Año</option>
            <option value="4">4° Año</option>
            <option value="5">5° Año</option>
            <option value="6">6° Año</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="studyTurn">
          <Form.Label>Turno que Cursa</Form.Label>
          <Form.Control
            as="select"
            value={studyTurn}
            onChange={handleTurnoCursaChange}
          >
            <option value="">Seleccione</option>
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="averageMarksWithPostponement">
          <Form.Label>Promedio con Aplazo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el promedio con aplazo"
            value={averageMarksWithPostponement}
            onChange={handlePromedioConAplazoChange}
          />
        </Form.Group>

        <Form.Group controlId="averageMarksWithoutPostponement">
          <Form.Label>Promedio sin Aplazo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el promedio sin aplazo"
            value={averageMarksWithoutPostponement}
            onChange={handlePromedioSinAplazoChange}
          />
        </Form.Group>

        <Form.Group controlId="collegeDegree">
          <Form.Label>Título Universitario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título universitario"
            value={collegeDegree}
            onChange={handleTituloUniversitarioChange}
          />
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}
