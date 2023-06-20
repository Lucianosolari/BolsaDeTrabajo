import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Table, Alert } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { getKnowledge, addKnowledge, deleteKnowledge } from "../../api"; // Reemplaza "api" con tu archivo de funciones de la API

export default function CreateKnowledge() {
  const [knowledgeList, setKnowledgeList] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchKnowledgeList();
  }, []);

  const fetchKnowledgeList = async () => {
    try {
      const response = await getKnowledge(user.token);
      if (response.ok) {
        const knowledgeData = await response.json();
        setKnowledgeList(knowledgeData);
        console.log(knowledgeData);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setError("");
  }, [selectedType]);

  const handleAddKnowledge = async () => {
    if (!selectedType) {
      setError("Debe ingresar un conocimiento");
      return;
    }

    try {
      await addKnowledge(user.token, selectedType); // Reemplaza "addKnowledge" con la función que agrega el conocimiento a la base de datos
      fetchKnowledgeList(); // Vuelve a obtener la lista de conocimientos actualizada desde la base de datos
      setSelectedType("");
      setError("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteKnowledge = async (knowledgeId) => {
    try {
      await deleteKnowledge(knowledgeId); // Reemplaza "deleteKnowledge" con la función que elimina el conocimiento de la base de datos
      fetchKnowledgeList(); // Vuelve a obtener la lista de conocimientos actualizada desde la base de datos
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="selectedType">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            isInvalid={!!error}
          />
          {error && <Alert variant="danger">{error}</Alert>}
        </Form.Group>

        <Button onClick={handleAddKnowledge}>Agregar Conocimiento</Button>

        {knowledgeList.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Nivel</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {knowledgeList.map((knowledge) => (
                <tr key={knowledge.knowledgeId}>
                  <td>{knowledge.type}</td>
                  <td>{knowledge.level}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleDeleteKnowledge(knowledge.knowledgeId)
                      }
                    >
                      Borrar
                    </Button>
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
