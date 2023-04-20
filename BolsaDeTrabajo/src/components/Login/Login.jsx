import { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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

      <Form.Group controlId="password">
        <Form.Label>Contraseña:</Form.Label>
        <InputGroup>
          <FormControl
            type={showPassword ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="outline-secondary" onClick={handleShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>

      <Link to="/recover-password">¿Olvidaste tu contraseña?</Link>
    </Form>
  );
}
