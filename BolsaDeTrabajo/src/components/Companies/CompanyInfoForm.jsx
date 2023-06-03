import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CompanyInfoForm() {
  // company data
  const [companyName, setCompanyName] = useState("");
  const [companyCUIT, setCompanyCUIT] = useState("");
  const [companyLine, setCompanyLine] = useState("");
  const [companyAdress, setCompanyAdress] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos a tu backend o hacer algo con ellos.
  };

  return (
    <Form onSubmit={handleSubmit}>

      {/* company data */}

      <Form.Group controlId="company-name">
        <Form.Label>Razón social</Form.Label>
        <Form.Control
          type="text"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-cUIT">
        <Form.Label>CUIT</Form.Label>
        <Form.Control
          type="text"
          value={companyCUIT}
          onChange={(event) => setCompanyCUIT(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-line">
        <Form.Label>Rubro</Form.Label>
        <Form.Control
          type="text"
          value={companyLine}
          onChange={(event) => setCompanyLine(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-adress">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          value={companyAdress}
          onChange={(event) => setCompanyAdress(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-location">
        <Form.Label>Localidad</Form.Label>
        <Form.Control
          as="select"
          value={companyLocation}
          onChange={(event) => setCompanyLocation(event.target.value)}
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
          onChange={(event) => setCompanyPostalCode(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="number"
          value={companyPhone}
          onChange={(event) => setCompanyPhone(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-web-page">
        <Form.Label>Web</Form.Label>
        <Form.Control
          type="text"
          value={companyWebPage}
          onChange={(event) => setCompanyWebPage(event.target.value)}
        />
      </Form.Group>

      {/* contact data */}

      <Form.Group controlId="company-personal-name">
        <Form.Label>Nombre personal</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalName}
          onChange={(event) => setCompanyPersonalName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-surname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalSurname}
          onChange={(event) => setCompanyPersonalSurname(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-job">
        <Form.Label>Puesto / Cargo</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalJob}
          onChange={(event) => setCompanyPersonalJob(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-phone">
        <Form.Label>Teléfono personal</Form.Label>
        <Form.Control
          type="number"
          value={companyPersonalPhone}
          onChange={(event) => setCompanyPersonalPhone(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-personal-email">
        <Form.Label>Correo personal</Form.Label>
        <Form.Control
          type="text"
          value={companyPersonalEmail}
          onChange={(event) => setCompanyPersonalEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="company-relation-contact">
            <Form.Label>Relación del contacto con la empresa</Form.Label>
            <Form.Control
              as="select"
              value={companyRelationContact}
              onChange={(event) => setCompanyRelationContact(event.target.value)}
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
}
