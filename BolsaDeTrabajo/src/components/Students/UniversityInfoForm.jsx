import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UniversityInfoForm() {
  const [especialidad, setEspecialidad] = useState("");
  const [cantidadMaterias, setCantidadMaterias] = useState("");
  const [planEspecialidad, setPlanEspecialidad] = useState("");
  const [anioCursa, setAnioCursa] = useState("");
  const [turnoCursa, setTurnoCursa] = useState("");
  const [promedioConAplazo, setPromedioConAplazo] = useState("");
  const [promedioSinAplazo, setPromedioSinAplazo] = useState("");
  const [tituloUniversitario, setTituloUniversitario] = useState("");

  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
  };

  const handleCantidadMateriasChange = (e) => {
    setCantidadMaterias(e.target.value);
  };

  const handlePlanEspecialidadChange = (e) => {
    setPlanEspecialidad(e.target.value);
  };

  const handleAnioCursaChange = (e) => {
    setAnioCursa(e.target.value);
  };

  const handleTurnoCursaChange = (e) => {
    setTurnoCursa(e.target.value);
  };

  const handlePromedioConAplazoChange = (e) => {
    setPromedioConAplazo(e.target.value);
  };

  const handlePromedioSinAplazoChange = (e) => {
    setPromedioSinAplazo(e.target.value);
  };

  const handleTituloUniversitarioChange = (e) => {
    setTituloUniversitario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la especialidad"
            value={especialidad}
            onChange={handleEspecialidadChange}
          />
        </Form.Group>

        <Form.Group controlId="cantidadMaterias">
          <Form.Label>Cantidad de Materias aprobadas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese la cantidad de materias aprobadas"
            value={cantidadMaterias}
            onChange={handleCantidadMateriasChange}
          />
        </Form.Group>

        <Form.Group controlId="planEspecialidad">
          <Form.Label>Plan de Especialidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el plan de especialidad"
            value={planEspecialidad}
            onChange={handlePlanEspecialidadChange}
          />
        </Form.Group>

        <Form.Group controlId="anioCursa">
          <Form.Label>Año que Cursa</Form.Label>
          <Form.Control
            as="select"
            value={anioCursa}
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

        <Form.Group controlId="turnoCursa">
          <Form.Label>Turno que Cursa</Form.Label>
          <Form.Control
            as="select"
            value={turnoCursa}
            onChange={handleTurnoCursaChange}
          >
            <option value="">Seleccione</option>
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="promedioConAplazo">
          <Form.Label>Promedio con Aplazo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el promedio con aplazo"
            value={promedioConAplazo}
            onChange={handlePromedioConAplazoChange}
          />
        </Form.Group>

        <Form.Group controlId="promedioSinAplazo">
          <Form.Label>Promedio sin Aplazo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el promedio sin aplazo"
            value={promedioSinAplazo}
            onChange={handlePromedioSinAplazoChange}
          />
        </Form.Group>

        <Form.Group controlId="tituloUniversitario">
          <Form.Label>Título Universitario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título universitario"
            value={tituloUniversitario}
            onChange={handleTituloUniversitarioChange}
          />
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
}
