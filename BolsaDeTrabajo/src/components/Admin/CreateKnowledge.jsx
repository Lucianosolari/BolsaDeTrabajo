import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { getKnowledge, addKnowledge, deleteKnowledge } from "../../api"; // Reemplaza "api" con tu archivo de funciones de la API

export default function CreateKnowledge() {
  const [knowledgeList, setKnowledgeList] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchKnowledgeList();
  }, []);

  const fetchKnowledgeList = async () => {
    try {
      const knowledgeData = await getKnowledge();
      setKnowledgeList(knowledgeData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddKnowledge = async () => {
    try {
      await addKnowledge(user.token, selectedType); // Reemplaza "addKnowledge" con la función que agrega el conocimiento a la base de datos
      fetchKnowledgeList(); // Vuelve a obtener la lista de conocimientos actualizada desde la base de datos
      setSelectedType("");
      setSelectedLevel("");
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
            as="select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Seleccione un tipo</option>
            {/* Agrega las opciones de tipo aquí */}
          </Form.Control>
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
