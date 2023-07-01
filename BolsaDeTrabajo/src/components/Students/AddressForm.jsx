import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Card,
  Button,
  Container,
  Alert,
} from "react-bootstrap";
import { useContext } from "react";
import { updateStudentAddressInfo } from "../../api";
import { UserContext } from "../../context/UserContext";

export default function AddressForm() {
  const [personalStreet, setPersonalStreet] = useState("");
  const [personalStreetNumber, setPersonalStreetNumber] = useState(0);
  const [personalStreetLetter, setPersonalStreetLetter] = useState("");
  const [personalFloor, setPersonalFloor] = useState(0);
  const [personalDepartment, setPersonalDepartment] = useState("");
  const [personalCountry, setPersonalCountry] = useState("");
  const [personalProvince, setPersonalProvince] = useState("");
  const [personalLocation, setPersonalLocation] = useState("");
  const [personalPersonalPhone, setPersonalPersonalPhone] = useState(0);
  const [personalOtherPhone, setPersonalOtherPhone] = useState(0);

  const [familyStreet, setFamilyStreet] = useState("");
  const [familyStreetNumber, setFamilyStreetNumber] = useState(0);
  const [familyStreetLetter, setFamilyStreetLetter] = useState("");
  const [familyFloor, setFamilyFloor] = useState(0);
  const [familyDepartment, setFamilyDepartment] = useState("");
  const [familyCountry, setFamilyCountry] = useState("");
  const [familyProvince, setFamilyProvince] = useState("");
  const [familyLocation, setFamilyLocation] = useState("");
  const [familyPersonalPhone, setFamilyPersonalPhone] = useState(0);
  const [familyOtherPhone, setFamilyOtherPhone] = useState(0);

  const [showAlert, setShowAlert] = useState("");
  const [showAlertValidation, setShowAlertValidation] = useState(false);
  const [error, setError] = useState("");

  const { user } = useContext(UserContext);

  const handleClickUpdateStudentAddressInfo = async (e) => {
    e.preventDefault();
    try {
      if (
        !familyStreet ||
        !familyStreetNumber ||
        !familyCountry ||
        !familyProvince ||
        !familyLocation ||
        !familyPersonalPhone ||
        !familyOtherPhone ||
        !personalStreet ||
        !personalStreetNumber ||
        !personalCountry ||
        !personalProvince ||
        !personalLocation ||
        !personalPersonalPhone ||
        !personalOtherPhone
      ) {
        setShowAlertValidation(true);
        return;
      }
      setShowAlert(false);
      setError(false);

      const data = await updateStudentAddressInfo(user.token, {
        familyStreet: familyStreet,
        familyStreetNumber: familyStreetNumber,
        familyStreetLetter: familyStreetLetter,
        familyFloor: familyFloor,
        familyDepartment: familyDepartment,
        familyCountry: familyCountry,
        familyProvince: familyProvince,
        familyLocation: familyLocation,
        familyPersonalPhone: familyPersonalPhone,
        familyOtherPhone: familyOtherPhone,
        personalStreet: personalStreet,
        personalStreetNumber: personalStreetNumber,
        personalStreetLetter: personalStreetLetter,
        personalFloor: personalFloor,
        personalDepartment: personalDepartment,
        personalCountry: personalCountry,
        personalProvince: personalProvince,
        personalLocation: personalLocation,
        personalPersonalPhone: personalPersonalPhone,
        personalOtherPhone: personalOtherPhone,
      });

      setShowAlert(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Container className="my-4">
        <div className="container">
          <Card>
            <Card.Header>Domicilio familiar</Card.Header>

            <Card.Body>
              <Form.Group as={Row} controlId="familyStreet">
                <Form.Label column sm={2}>
                  Calle
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la calle"
                    value={familyStreet}
                    onChange={(e) => setFamilyStreet(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyStreetNumber">
                <Form.Label column sm={2}>
                  Número de calle
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el número de la calle"
                    value={familyStreetNumber}
                    onChange={(e) =>
                      setFamilyStreetNumber(parseInt(e.target.value))
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyStreetLetter">
                <Form.Label column sm={2}>
                  Letra/Bis
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la letra o bis (opcional)"
                    value={familyStreetLetter}
                    onChange={(e) => setFamilyStreetLetter(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyFloor">
                <Form.Label column sm={2}>
                  Piso
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el número de piso (opcional)"
                    value={familyFloor}
                    onChange={(e) => setFamilyFloor(parseInt(e.target.value))}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyDepartment">
                <Form.Label column sm={2}>
                  Departamento
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese departamento (opcional)"
                    value={familyDepartment}
                    onChange={(e) => setFamilyDepartment(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyCountry">
                <Form.Label column sm={2}>
                  País
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="select"
                    value={familyCountry}
                    onChange={(e) => setFamilyCountry(e.target.value)}
                  >
                    <option value="">Seleccione un país</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                    {/* Add more country options */}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyProvince">
                <Form.Label column sm={2}>
                  Provincia
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la provincia"
                    value={familyProvince}
                    onChange={(e) => setFamilyProvince(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyLocation">
                <Form.Label column sm={2}>
                  Ciudad/Localidad
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la localidad"
                    value={familyLocation}
                    onChange={(e) => setFamilyLocation(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyPersonalPhone">
                <Form.Label column sm={2}>
                  Teléfono particular
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su número de teléfono particular"
                    value={familyPersonalPhone}
                    onChange={(e) =>
                      setFamilyPersonalPhone(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="familyOtherPhone">
                <Form.Label column sm={2}>
                  Otro teléfono
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese otro número de teléfono (opcional)"
                    value={familyOtherPhone}
                    onChange={(e) =>
                      setFamilyOtherPhone(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>

        <br></br>
        <div className="container">
          <Card>
            <Card.Body>
              <Card.Header>Domicilio personal</Card.Header>

              <Form.Group as={Row} controlId="personalStreet">
                <Form.Label column sm={2}>
                  Calle
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la calle"
                    value={personalStreet}
                    onChange={(e) => setPersonalStreet(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="personalStreetNumber">
                <Form.Label column sm={2}>
                  Número de calle
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el número de la calle"
                    value={personalStreetNumber}
                    onChange={(e) =>
                      setPersonalStreetNumber(parseInt(e.target.value))
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalStreetLetter">
                <Form.Label column sm={2}>
                  Letra/Bis
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la letra o bis (opcional)"
                    value={personalStreetLetter}
                    onChange={(e) => setPersonalStreetLetter(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalFloor">
                <Form.Label column sm={2}>
                  Piso
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el número de piso (opcional)"
                    value={personalFloor}
                    onChange={(e) => setPersonalFloor(parseInt(e.target.value))}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalDepartment">
                <Form.Label column sm={2}>
                  Departamento
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese departamento (opcional)"
                    value={personalDepartment}
                    onChange={(e) => setPersonalDepartment(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalCountry">
                <Form.Label column sm={2}>
                  País
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="select"
                    value={personalCountry}
                    onChange={(e) => setPersonalCountry(e.target.value)}
                  >
                    <option value="">Seleccione un país</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brazil</option>
                    <option value="Chile">Chile</option>
                    {/* Add more country options */}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalProvince">
                <Form.Label column sm={2}>
                  Provincia
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la provincia"
                    value={personalProvince}
                    onChange={(e) => setPersonalProvince(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalLocation">
                <Form.Label column sm={2}>
                  Ciudad/Localidad
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la localidad"
                    value={personalLocation}
                    onChange={(e) => setPersonalLocation(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalPersonalPhone">
                <Form.Label column sm={2}>
                  Teléfono particular
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su número de teléfono particular"
                    value={personalPersonalPhone}
                    onChange={(e) =>
                      setPersonalPersonalPhone(parseInt(e.target.value))
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="personalOtherPhone">
                <Form.Label column sm={2}>
                  Otro teléfono
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese otro número de teléfono (opcional)"
                    value={personalOtherPhone}
                    onChange={(e) =>
                      setPersonalOtherPhone(parseInt(e.target.value))
                    }
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
        <br></br>
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Domicilio cargado con éxito, continúa cargando tus datos
          </Alert>
        )}

        {showAlertValidation && (
          <Alert
            variant="danger"
            onClose={() => setShowAlertValidation(false)}
            dismissible
          >
            Por favor, complete todos los campos obligatorios.
          </Alert>
        )}

        {error && (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {" "}
            Error al actualizar la información de dirección: {error.message}
          </Alert>
        )}
        <Button onClick={handleClickUpdateStudentAddressInfo}>
          Cargar Domicilios
        </Button>
      </Container>
    </>
  );
}
