import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useContext } from "react";
import { createOffer } from "../../api";
import { UserContext } from "../../context/UserContext";

const CreateOffer = () => {
  const [title, setTitle] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { user } = useContext(UserContext);
  const [success, setSuccess] = useState("");
  const [frontError, setFrontError] = useState("");
  const [apiError, setApiError] = useState("");

  const handleClickCreateOffer = async (e) => {
    e.preventDefault();
    if (!title || !specialty || !description || !date) {
      setFrontError("Por favor, complete todos los campos");
      return;
    }
    try {
      setSuccess("");
      setFrontError("");
      const data = await createOffer({
        token: user.token,
        offerData: {
          title: title,
          specialty: specialty,
          description: description,
          date: date,
          companyId: user.userId,
        },
      });

      if (data) {
        setSuccess("Oferta Creada con éxito");
        setTitle("");
        setSpecialty("");
        setDescription("");
        setDate("");
      }
    } catch (error) {
      setApiError(error.message);
    }
  };

  useEffect(() => {
    setApiError("");
    setFrontError("");
  }, [title, specialty, description, date])
  

  return (
    <Form onSubmit={handleClickCreateOffer}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSpecialty">
        <Form.Label>Specialty</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter specialty"
          value={specialty}
          onChange={(event) => setSpecialty(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear Oferta
      </Button>

      {frontError && (
        <Alert variant="danger" dismissible onClose={() => setFrontError("")}>
          {frontError}
        </Alert>
      )}

      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess("")}>
          {success}
        </Alert>
      )}

      {apiError && (
        <Alert variant="danger" dismissible onClose={() => setApiError("")}>
          {apiError}
        </Alert>
      )}
    </Form>
  );
};
export default CreateOffer;
