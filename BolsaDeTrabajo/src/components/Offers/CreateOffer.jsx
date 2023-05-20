import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { createOffer } from "../../api";
import { UserContext } from "../../context/UserContext";

const CreateOffer = () => {
  const [title, setTitle] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { user } = useContext(UserContext);

  const handleClickCreateOffer = async (e) => {
    e.preventDefault();
    try {
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
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

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
    </Form>
  );
};
export default CreateOffer;
