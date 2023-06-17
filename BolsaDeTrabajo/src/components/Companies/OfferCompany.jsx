import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getCompanyOffers } from "../../api"; //removeStudentFromOffer
import { format } from "date-fns";
import { Card, Button } from "react-bootstrap";

const OfferCompany = () => {
  const { user } = useContext(UserContext);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getCompanyOffers(user.userId, user.token)
      .then((data) => {
        setOffers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRemoveStudentFromOffer = (offerId) => {
    removeStudentFromOffer(offerId, user.userId, user.token)
      .then(() => {
        const updatedOffers = offers.filter(
          (offer) => offer.offerId !== offerId
        );
        setOffers(updatedOffers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ marginBlock: "20px" }}>
      {offers.map((offer, index) => (
        <Card
          key={offer.offerId}
          className={index % 2 === 0 ? "even-card" : "odd-card"}
        >
          <Card.Body>
            <Card.Title> {offer.company.companyName}</Card.Title>

            <Card.Title>Busca {offer.offerTitle}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              Con conocimiento excluyente en: {offer.offerSpecialty}
            </Card.Subtitle>

            <Card.Text>{offer.offerDescription}</Card.Text>
            <Card.Text>
              Fecha de publicación{" "}
              {format(new Date(offer.createdDate), "dd/MM/yyyy")}
            </Card.Text>
            <Card.Text> Rubro: {offer.company.companyLine}</Card.Text>
            <Card.Text> Ciudad: {offer.company.companyLocation}</Card.Text>

            <Button
              onClick={() => handleRemoveStudentFromOffer(offer.offerId)}
              variant="danger"
            >
              Eliminar postulación
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default OfferCompany;
