import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createCompany } from "../../api";

const CompanyInfoForm = () => {
  // company data
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [companyCUIT, setCompanyCUIT] = useState("");
  const [companyLine, setCompanyLine] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyPostalCode, setCompanyPostalCode] = useState("");
  const [companyPhone, setCompanyPhone] = useState(0);
  const [companyWebPage, setCompanyWebPage] = useState("");

  // contact data
  const [companyPersonalName, setCompanyPersonalName] = useState("");
  const [companyPersonalSurname, setCompanyPersonalSurname] = useState("");
  const [companyPersonalJob, setCompanyPersonalJob] = useState("");
  const [companyPersonalPhone, setCompanyPersonalPhone] = useState(0);
  const [companyPersonalEmail, setCompanyPersonalEmail] = useState("");
  const [companyRelationContact, setCompanyRelationContact] = useState("");
  //const [companyPendingConfirmation, setCompanyPendingConfirmation] = useState(true);

  const [error, setError] = useState("");

  const handleCreateCompany = async (event) => {
    event.preventDefault();
    try {
      const data = await createCompany({
        userName: userName,
        password: password,
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
        pendingConfirmation: true //SI SE INSCRIBE DIRECTAMENTE, NO VA A HACER FALTA
      });
      console.log(data);
    // Hacer algo con los datos retornados (data) después de crear la empresa
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Form onSubmit={handleCreateCompany}>

      {/* company data */}

      <Form.Group controlId="company-user-name">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-CUIT">
        <Form.Label>CUIT</Form.Label>
        <Form.Control
          type="text"
          value={companyCUIT}
          onChange={(e) => setCompanyCUIT(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-line">
        <Form.Label>Rubro</Form.Label>
        <Form.Control
          type="text"
          value={companyLine}
          onChange={(e) => setCompanyLine(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-name">
        <Form.Label>Razón social</Form.Label>
        <Form.Control
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-adress">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-location">
        <Form.Label>Localidad</Form.Label>
        <Form.Control
          as="select"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
        >
          <option value="" disabled>Seleccione una localidad</option>
          <option value="Rosario">Rosario</option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Cordoba">Córdoba</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="company-postal-code">
        <Form.Label>Código postal</Form.Label>
        <Form.Control
          type="text"
          value={companyPostalCode}
          onChange={(e) => setCompanyPostalCode(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="number"
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-web-page">
        <Form.Label>Web</Form.Label>
        <Form.Control
          type="text"
          value={companyWebPage}
          onChange={(e) => setCompanyWebPage(e.target.value)}
        />
      </Form.Group>

      {/* contact data */}

      <Form.Group controlId="company-personal-name">
        <Form.Label>Nombre personal</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalName}
          onChange={(e) => setCompanyPersonalName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-surname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalSurname}
          onChange={(e) => setCompanyPersonalSurname(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-job">
        <Form.Label>Puesto / Cargo</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalJob}
          onChange={(e) => setCompanyPersonalJob(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-phone">
        <Form.Label>Teléfono personal</Form.Label>
        <Form.Control
          type="number"
          value={companyPersonalPhone}
          onChange={(e) => setCompanyPersonalPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-email">
        <Form.Label>Correo personal</Form.Label>
        <Form.Control
          type="email"
          value={companyPersonalEmail}
          onChange={(e) => setCompanyPersonalEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-relation-contact">
            <Form.Label>Relación del contacto con la empresa</Form.Label>
            <Form.Control
              as="select"
              value={companyRelationContact}
              onChange={(e) => setCompanyRelationContact(e.target.value)}
            >
                <option value="" disabled>Seleccione un tipo de relación</option>
                <option value="CompanyWork">Trabajo en la Empresa que solicita la Búsqueda</option>
                <option value="ConsultantWork">Trabajo para una consultora</option>
            </Form.Control>
        </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default CompanyInfoForm;