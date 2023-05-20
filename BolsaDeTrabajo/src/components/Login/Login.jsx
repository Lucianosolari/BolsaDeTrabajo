import { useState, useContext, useEffect } from "react";
import { Form, Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, logout } from "../../api";
import { UserContext } from "../../context/UserContext";
import SettingStudents from "../Students/SettingStudents";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, user } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      navigate("/UniversityInfoForm");
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

  const logoutUserClick = async () => {
    console.log(user.userId);
    try {
      console.log(user.userId);
      const data = await logout(user.token);
      setUser(null);

      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle login error
    }
    console.log(user.token);
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

      <SettingStudents> </SettingStudents>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
      <Button variant="primary" type="button" onClick={logoutUserClick}>
        Cerrar sesión
      </Button>

      <Link to="/recover-password" style={{ color: "black" }}>
        ¿Olvidaste tu contraseña?
      </Link>
    </Form>
  );
}
