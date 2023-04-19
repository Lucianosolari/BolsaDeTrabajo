import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const tiposEmpresa = ["Tipo 1", "Tipo 2", "Tipo 3"];

const estadosEmpresa = ["Activa", "Inactiva"];

export default function CompanyInfoForm() {
  const [codigo, setCodigo] = useState("");
  const [cuit, setCuit] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [paginaWeb, setPaginaWeb] = useState("");
  const [personaContacto, setPersonaContacto] = useState("");
  const [tipoEmpresa, setTipoEmpresa] = useState("");
  const [estadoEmpresa, setEstadoEmpresa] = useState("");
  const [documentacion1, setDocumentacion1] = useState(false);
  const [documentacion2, setDocumentacion2] = useState(false);
  const [documentacion3, setDocumentacion3] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos a tu backend o hacer algo con ellos.
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="codigo">
        <Form.Label>Código</Form.Label>
        <Form.Control
          type="text"
          value={codigo}
          onChange={(event) => setCodigo(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="cuit">
        <Form.Label>CUIT</Form.Label>
        <Form.Control
          type="text"
          value={cuit}
          onChange={(event) => setCuit(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="razonSocial">
        <Form.Label>Razón social</Form.Label>
        <Form.Control
          type="text"
          value={razonSocial}
          onChange={(event) => setRazonSocial(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="domicilio">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          value={domicilio}
          onChange={(event) => setDomicilio(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="paginaWeb">
        <Form.Label>Página web</Form.Label>
        <Form.Control
          type="text"
          value={paginaWeb}
          onChange={(event) => setPaginaWeb(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="personaContacto">
        <Form.Label>Persona de contacto</Form.Label>
        <Form.Control
          type="text"
          value={personaContacto}
          onChange={(event) => setPersonaContacto(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="tipoEmpresa">
        <Form.Label>Tipo de empresa</Form.Label>
        <Form.Control
          as="select"
          value={tipoEmpresa}
          onChange={(event) => setTipoEmpresa(event.target.value)}
        >
          <option value="">Seleccione un tipo</option>
          {tiposEmpresa.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="estadoEmpresa">
        <Form.Label>Estado de empresa</Form.Label>
        <Form.Control
          as="select"
          value={estadoEmpresa}
          onChange={(event) => setEstadoEmpresa(event.target.value)}
        >
          <option value="">Seleccione un estado</option>
          {estadosEmpresa.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="tipoDocumentacion">
        <Form.Label>Tipo de documentación presentada</Form.Label>
        <div>
          <Form.Check
            type="checkbox"
            label="Documentación 1"
            checked={documentacion1}
            onChange={(event) => setDocumentacion1(event.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Documentación 2"
            checked={documentacion2}
            onChange={(event) => setDocumentacion2(event.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Documentación 3"
            checked={documentacion3}
            onChange={(event) => setDocumentacion3(event.target.checked)}
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
