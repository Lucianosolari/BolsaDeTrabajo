import { useEffect, useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { createCompany } from "../../api";

const CompanyInfoForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyCUIT, setCompanyCUIT] = useState("");
  const [companyLine, setCompanyLine] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyPostalCode, setCompanyPostalCode] = useState("");
  const [companyPhone, setCompanyPhone] = useState(0);
  const [companyWebPage, setCompanyWebPage] = useState("");

  const [companyPersonalName, setCompanyPersonalName] = useState("");
  const [companyPersonalSurname, setCompanyPersonalSurname] = useState("");
  const [companyPersonalJob, setCompanyPersonalJob] = useState("");
  const [companyPersonalPhone, setCompanyPersonalPhone] = useState(0);
  const [companyPersonalEmail, setCompanyPersonalEmail] = useState("");
  const [companyRelationContact, setCompanyRelationContact] = useState("");
  const [frontError, setFrontError] = useState("");
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const handleCreateCompany = async (event) => {
    event.preventDefault();
    if (!userName || !password || !confirmPassword || !companyCUIT || !companyLine || !companyName || !companyAddress || !companyLocation || !companyPostalCode || !companyPhone || !companyWebPage || !companyPersonalName || !companyPersonalSurname || !companyPersonalJob || !companyPersonalPhone || !companyPersonalEmail || !companyRelationContact) {
      setFrontError("Todos los campos deben estar completos");
      return;
    }
    try {
      const data = await createCompany({
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        CUIT: companyCUIT,
        line: companyLine,
        name: companyName,
        address: companyAddress,
        location: companyLocation,
        postalCode: companyPostalCode,
        phone: companyPhone,
        webPage: companyWebPage,
        personalName: companyPersonalName,
        personalSurname: companyPersonalSurname,
        personalJob: companyPersonalJob,
        personalPhone: companyPersonalPhone,
        email: companyPersonalEmail,
        relationContact: companyRelationContact,
        pendingConfirmation: true,
      });
      setApiError("");
      setApiSuccess(
        "Usuario de empresa creado, esperar validación del administrador (entre 24 y 48hs)"
      );
    } catch (error) {
      setApiError(error.message);
      setApiSuccess("");
    }
    
  };

  useEffect(() => {
    setFrontError("");
    setApiError("");
  }, [userName, password, confirmPassword, companyCUIT, companyLine, companyName, companyAddress, companyLocation, companyPostalCode, companyPhone, companyWebPage, companyPersonalName, companyPersonalSurname, companyPersonalJob, companyPersonalPhone, companyPersonalEmail, companyRelationContact])
  return (
    <Form onSubmit={handleCreateCompany}>
      <Row>
        <Col>
          <Form.Group controlId="company-user-name">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ingresa el nombre de usuario"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-confirm-password">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ingresa nuevamente la contraseña"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-CUIT">
            <Form.Label>CUIT</Form.Label>
            <Form.Control
              type="text"
              value={companyCUIT}
              onChange={(e) => setCompanyCUIT(e.target.value)}
              placeholder="Ingresa el CUIT de la empresa"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-line">
            <Form.Label>Rubro</Form.Label>
            <Form.Control
              type="text"
              value={companyLine}
              onChange={(e) => setCompanyLine(e.target.value)}
              placeholder="Ingresa el rubro de la empresa"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-name">
            <Form.Label>Razón social</Form.Label>
            <Form.Control
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Ingresa la razón social de la empresa"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-adress">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              placeholder="Ingresa el domicilio de la empresa"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-location">
            <Form.Label>Localidad</Form.Label>
            <Form.Control
              as="select"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una localidad
              </option>
              <option value="Rosario">Rosario</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Cordoba">Córdoba</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-postal-code">
            <Form.Label>Código postal</Form.Label>
            <Form.Control
              type="text"
              value={companyPostalCode}
              onChange={(e) => setCompanyPostalCode(e.target.value)}
              placeholder="Introduce el código postal"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-phone">
            <Form.Label>Teléfono de la empresa</Form.Label>
            <Form.Control
              type="number"
              value={companyPhone}
              onChange={(e) => setCompanyPhone(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-web-page">
            <Form.Label>Web</Form.Label>
            <Form.Control
              type="text"
              value={companyWebPage}
              onChange={(e) => setCompanyWebPage(e.target.value)}
              placeholder="Ingresa la dirección web de la empresa"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-personal-name">
            <Form.Label>Nombre personal</Form.Label>
            <Form.Control
              type="text"
              value={companyPersonalName}
              onChange={(e) => setCompanyPersonalName(e.target.value)}
              placeholder="Ingresa tu nombre personal"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-personal-surname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={companyPersonalSurname}
              onChange={(e) => setCompanyPersonalSurname(e.target.value)}
              placeholder="Ingresa tu apellido"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-personal-job">
            <Form.Label>Puesto / Cargo</Form.Label>
            <Form.Control
              type="text"
              value={companyPersonalJob}
              onChange={(e) => setCompanyPersonalJob(e.target.value)}
              placeholder="Ingresa tu puesto en la empresa"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-personal-phone">
            <Form.Label>Teléfono personal</Form.Label>
            <Form.Control
              type="number"
              value={companyPersonalPhone}
              onChange={(e) => setCompanyPersonalPhone(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="company-personal-email">
            <Form.Label>Email personal</Form.Label>
            <Form.Control
              type="email"
              value={companyPersonalEmail}
              onChange={(e) => setCompanyPersonalEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="company-relation-contact">
            <Form.Label>Persona de contacto</Form.Label>
            <Form.Control
              type="text"
              value={companyRelationContact}
              onChange={(e) => setCompanyRelationContact(e.target.value)}
              placeholder="Ingresa el nombre de tu persona de contacto"
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Crear empresa
      </Button>

      {frontError && <Alert variant="danger">{frontError}</Alert>}
      {apiError && <Alert variant="danger">{apiError}</Alert>}
      {apiSuccess && <Alert variant="success">{apiSuccess}</Alert>}
    </Form>
  );
};

export default CompanyInfoForm;