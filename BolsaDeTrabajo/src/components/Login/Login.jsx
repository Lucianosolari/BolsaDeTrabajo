import { useState, useContext } from "react";
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { loginUser } from "../../api";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ username: userName, password: password });

      console.log(data);
      setUser(data);
      setError("");
    } catch (error) {
      console.error(error);
      setError(
        "Usuario o contraseña incorrecto. Por favor, inténtalo de nuevo."
      );
      setUserName("");
      setPassword("");
      // Handle login error
    }
  };

  return (
    <Form onSubmit={handleClickLogin}>
      <Form.Group controlId="tetx">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu usuario"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>

      <Link to="/recover-password" style={{ color: "black" }}>
        ¿Olvidaste tu contraseña?
      </Link>
    </Form>
  );
}
