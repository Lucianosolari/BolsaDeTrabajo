import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { getOffers } from "../../api";
import "./Offers.css";
import { format } from "date-fns";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

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

  return (
    <div style={{ marginBlock: "20px" }}>
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
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Offers;
