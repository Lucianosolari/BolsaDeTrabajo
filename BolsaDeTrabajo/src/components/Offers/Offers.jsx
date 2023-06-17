import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { getOffers, addStudentToOffer } from "../../api";
import "./Offers.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../../context/UserContext";

function Offers() {
  const [offersData, setOffersData] = useState([]);
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
      await addStudentToOffer(user.token, user.userId, offerId);
    } catch (error) {
      console.error(error);
    }
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
            {user && (
              <Button
                onClick={() => handleStudentToOffer(offer.offerId)}
                variant="primary"
              >
                Inscribirse a la oferta
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Offers;
