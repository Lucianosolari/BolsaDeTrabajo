import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { recoverPassword } from "../../api";

export default function RecoverPassword() {
  const [userName, setUserName] = useState("");

  const handleRecoverPassword = async (event) => {
    event.preventDefault();
    // Add your password recovery logic here
    // Send email with new password to the entered email
    try {
      const data = await recoverPassword({ username: userName });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleRecoverPassword}>
      <Form.Group controlId="email">
        <Form.Label>
          Para recuperar la contraseña te enviaremos un email
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu usuario para recuperar tu contraseña"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Recuperar contraseña
      </Button>
    </Form>
  );
}
