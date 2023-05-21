import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { recoverPassword } from "../../api";
import "./Login.css";

export default function RecoverPassword() {
  const [userName, setUserName] = useState("");

  const handleRecoverPassword = async (event) => {
    event.preventDefault();

    try {
      const data = await recoverPassword({ username: userName });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-card">
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

        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Recuperar contraseña
        </Button>
      </Form>
    </div>
  );
}
