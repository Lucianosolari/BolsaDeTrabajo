import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
//import DeleteIcon from "@material-ui/icons/Delete";

export default function UpdateKnowledgeForm() {
  const [conocimientos, setConocimientos] = useState([]);
  const [conocimientoSeleccionado, setConocimientoSeleccionado] = useState("");
  const [nivelSeleccionado, setNivelSeleccionado] = useState("bajo");

  const handleConocimientoChange = (event) => {
    setConocimientoSeleccionado(event.target.value);
  };

  const handleNivelChange = (event) => {
    setNivelSeleccionado(event.target.value);
  };

  const handleAgregarConocimiento = () => {
    if (conocimientoSeleccionado !== "") {
      const nuevoConocimiento = {
        conocimiento: conocimientoSeleccionado,
        nivel: nivelSeleccionado,
      };
      setConocimientos([...conocimientos, nuevoConocimiento]);
      setConocimientoSeleccionado("");
      setNivelSeleccionado("bajo");
    }
  };

  const handleBorrarConocimiento = (index) => {
    const nuevosConocimientos = [...conocimientos];
    nuevosConocimientos.splice(index, 1);
    setConocimientos(nuevosConocimientos);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="conocimientoSeleccionado">
          <Form.Label>Conocimientos</Form.Label>
          <Form.Control
            as="select"
            value={conocimientoSeleccionado}
            onChange={handleConocimientoChange}
          >
            <option value="">Seleccione un conocimiento</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            {/* Agrega más opciones de conocimientos aquí */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="nivelSeleccionado">
          <Form.Label>Nivel</Form.Label>
          <Form.Control
            as="select"
            value={nivelSeleccionado}
            onChange={handleNivelChange}
          >
            <option value="bajo">Bajo</option>
            <option value="medio">Medio</option>
            <option value="alto">Alto</option>
          </Form.Control>
        </Form.Group>

        <Button onClick={handleAgregarConocimiento}>
          Agregar Conocimiento
        </Button>

        {conocimientos.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Conocimiento</th>
                <th>Nivel</th>
                <th>Acciones</th> {/* Agrega una columna para las acciones */}
              </tr>
            </thead>
            <tbody>
              {conocimientos.map((conocimiento, index) => (
                <tr key={index}>
                  <td>{conocimiento.conocimiento}</td>
                  <td>{conocimiento.nivel}</td>
                  <td>
                    {/* Agrega el icono de borrado con su función de manejo de eventos */}
                    <Button
                      variant="danger"
                      onClick={() => handleBorrarConocimiento(index)}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Form>
    </>
  );
}
