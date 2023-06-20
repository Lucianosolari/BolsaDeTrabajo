import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { getOffers, addStudentToOffer } from "../../api";
import "./Offers.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../../context/UserContext";

function Offers() {
  const [offersData, setOffersData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectedOfferId, setSelectedOfferId] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await getOffers();
      const data = await response?.json();
      setOffersData(data?.value || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStudentToOffer = async (offerId) => {
    try {
      const response = await addStudentToOffer(
        user.token,
        user.userId,
        offerId
      );
      if (response === true) {
        setMessage(
          "Te inscribiste correctamente. En la sección 'Ver mis ofertas' podrás ver más detalles."
        );
        setError(""); // Limpiar el estado de error
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
      setMessage(""); // Limpiar el estado de mensaje
    }
    setSelectedOfferId(offerId);
  };

  return (
    <Container style={{ marginBlock: "20px" }}>
      <h1>¡Estas son las ofertas que tenemos para ti!</h1>

      {user ? (
        <h3>¡No esperes más y postúlate ahora mismo! </h3>
      ) : (
        <h3>Para postularte tienes que iniciar sesión</h3>
      )}

      {!user && (
        <Row>
          <Col>
            <p>
              ¿Aún no estás registrado? Ingresa y hazlo{" "}
              <Link to="/studentsform" className="highlight-link">
                <Button variant="primary">Registrarme</Button>
              </Link>
            </p>
          </Col>
        </Row>
      )}

      {!user && (
        <Row>
          <Col>
            <p>
              ¿Ya tienes cuenta? Ingresa{" "}
              <Link
                to={{ pathname: "/login", state: { from: "Offers" } }}
                className="highlight-link"
              >
                <Button variant="secondary">aquí</Button>
              </Link>
            </p>
          </Col>
        </Row>
      )}

      {offersData.map((offer, index) => (
        <Card
          key={offer.offerId}
          className={index % 2 === 0 ? "even-card" : "odd-card"}
        >
          <Card.Body>
            <Card.Title>{offer.company.companyName}</Card.Title>
            <Card.Title>{offer.offerTitle}</Card.Title>
            {user && (
              <Card.Subtitle className="mb-2 text-muted">
                {offer.offerSpecialty}
              </Card.Subtitle>
            )}
            {user && <Card.Text>{offer.offerDescription}</Card.Text>}
            <Card.Text>
              {format(new Date(offer.createdDate), "dd/MM/yyyy")}
            </Card.Text>
            {user && user.userType === "Student" && (
              <Button
                onClick={() => handleStudentToOffer(offer.offerId)}
                variant="primary"
              >
                Inscribirse a la oferta
              </Button>
            )}
          </Card.Body>

          {selectedOfferId === offer.offerId && (
            <Card.Footer>
              {message && (
                <Alert
                  variant="success"
                  dismissible
                  onClose={() => setMessage("")}
                >
                  {message}
                </Alert>
              )}
              {error && (
                <Alert
                  variant="danger"
                  dismissible
                  onClose={() => setError("")}
                >
                  {error}
                </Alert>
              )}
            </Card.Footer>
          )}
        </Card>
      ))}
    </Container>
  );
}

export default Offers;
