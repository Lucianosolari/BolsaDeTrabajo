import React, { useState } from "react";
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

export default function PersonalInfoForm() {
  const [user, setUser] = useState("");
  const [legajo, setLegajo] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los valores de los campos
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <FormGroup controlId="user">
            <FormLabel>Usuario</FormLabel>
            <FormControl
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="legajo">
            <FormLabel>Número de Legajo</FormLabel>
            <FormControl
              type="text"
              value={legajo}
              onChange={(e) => setLegajo(e.target.value)}
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
                  <option>LU</option>
                </Form.Select>
              </Col>
              <Col md={8}>
                <FormControl
                  type="text"
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
              type="text"
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
      <p>"Familiar"</p>
      <AddressForm></AddressForm>
      <p>"Personal"</p>
      <AddressForm></AddressForm>

      <UniversityInfoForm></UniversityInfoForm>
      <OtherInfoForm></OtherInfoForm>
      <UpdateKnowledgeForm></UpdateKnowledgeForm>
      <ApplicationHistory></ApplicationHistory>

      <CompanyInfoForm></CompanyInfoForm>

      <Login></Login>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
