import React, { useState } from "react";
import { format } from "date-fns";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Row,
  Col,
  FormCheck,
  FormSelect,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddressForm from "./AddressForm";
import UniversityInfoForm from "./UniversityInfoForm";
import OtherInfoForm from "./OtherInfoForm";
import UpdateKnowledgeForm from "./UpdateKnowledgeForm";
import ApplicationHistory from "./ApplicationHistory";
import CompanyInfoForm from "../Companies/CompanyInfoForm";
import Login from "../Login/Login";
import { createStudent } from "../../api";

export default function PersonalInfoForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [cuil, setCuil] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const handleCreateStudent = async (event) => {
    event.preventDefault();
    const formattedBirthdate = birthdate
      ? format(birthdate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
      : null;

    try {
      const data = await createStudent({
        userName: userName,
        password: password,
        file: file,
        lastName: lastName,
        firstName: firstName,
        email: email,
        altEmail: altEmail,
        docType: docType,
        docNumber: docNumber,
        cuil: cuil,
        birthdate: formattedBirthdate,
        gender: gender,
        maritalStatus: maritalStatus,
      });
      console.log(data);
      // Hacer algo con los datos retornados (data) después de crear el estudiante
    } catch (error) {
      console.error(error);

      // Manejar el error de creación del estudiante
      const errorMessage = await error.response.json();
      console.log(errorMessage);
    }
  };

  return (
    <Form onSubmit={handleCreateStudent}>
      <Row>
        <Col>
          <FormGroup controlId="userName">
            <FormLabel>Usuario</FormLabel>
            <FormControl
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="password">
            <FormLabel>Contraseña</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="file">
            <FormLabel>Número de Legajo</FormLabel>
            <FormControl
              type="int"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              placeholder="Ingresa tu número de legajo"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup controlId="lastName">
            <FormLabel>Apellido</FormLabel>
            <FormControl
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ingresa tu apellido"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="firstName">
            <FormLabel>Nombres</FormLabel>
            <FormControl
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ingresa tus nombres"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="altEmail">
            <FormLabel>Email alternativo</FormLabel>
            <FormControl
              type="email"
              value={altEmail}
              onChange={(e) => setAltEmail(e.target.value)}
              placeholder="Ingresa un correo electrónico alternativo"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup controlId="doc">
            <FormLabel>Tipo y número de documento</FormLabel>
            <Row>
              <Col md={4}>
                <Form.Select
                  type="select"
                  placeholder="Tipo de documento"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                >
                  <option>DNI</option>
                  <option>LE</option>
                </Form.Select>
              </Col>
              <Col md={8}>
                <FormControl
                  type="int"
                  placeholder="Número de documento"
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                />
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup controlId="cuil">
            <FormLabel>CUIL o CUIT</FormLabel>
            <FormControl
              type="int"
              value={cuil}
              onChange={(e) => setCuil(e.target.value)}
              placeholder="Ingresa el CUIL o CUIT"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="birthdate">
            <FormLabel>Fecha de nacimiento</FormLabel>
            <br />
            <DatePicker
              selected={birthdate}
              onChange={(date) => setBirthdate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup controlId="gender">
            <FormLabel>Sexo</FormLabel>
            <br />
            <FormCheck
              inline
              label="Masculino"
              type="radio"
              name="gender"
              value="Masculino"
              onChange={(e) => setGender(e.target.value)}
            />
            <FormCheck
              inline
              label="Femenino"
              type="radio"
              name="gender"
              value="Femenino"
              onChange={(e) => setGender(e.target.value)}
            />
            <FormCheck
              inline
              label="Otro"
              type="radio"
              name="gender"
              value="Otro"
              onChange={(e) => setGender(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="maritalStatus">
            <FormLabel>Estado civil</FormLabel>
            <br />
            <FormCheck
              inline
              label="Soltero/a"
              type="radio"
              name="maritalStatus"
              value="Soltero/a"
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
            <FormCheck
              inline
              label="Casado/a"
              type="radio"
              name="maritalStatus"
              value="Casado/a"
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
            <FormCheck
              inline
              label="Divorciado/a"
              type="radio"
              name="maritalStatus"
              value="Divorciado/a"
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
            <FormCheck
              inline
              label="Viudo/a"
              type="radio"
              name="maritalStatus"
              value="Viudo/a"
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}
