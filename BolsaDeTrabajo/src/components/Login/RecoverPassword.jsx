import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your password recovery logic here
    // Send email with new password to the entered email
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Recuperar contraseña
      </Button>
    </Form>
  );
}
