import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getStudentsInOffer } from '../../api';
import { Alert, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const StudentsInOffer = () => {
  const { user } = useContext(UserContext);
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [apiError, setApiError] = useState("");
  const { offerId } = useParams();

  useEffect(() => {
    getStudentsInOffer(user.token, offerId)
      .then((data) => {
        console.log(data);
        setRegisteredStudents(data);
        setApiError("");
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }, [offerId, user.token]);

  return (
    <div style={{ marginBlock: "20px" }}>

      {registeredStudents.map((student, index) => (
        <Card
          key={student.offerId}
          className={index % 2 === 0 ? "even-card" : "odd-card"}
        >
          <Card.Body>
            <Card.Title>Nombre y apellido: {student.name} {student.surname}</Card.Title>

            {/* <Card.Subtitle className="mb-2 text-muted">
              Con conocimiento excluyente en: {offer.offerSpecialty}
            </Card.Subtitle>

            <Card.Text>{offer.offerDescription}</Card.Text>
            <Card.Text>
              Fecha de publicación{" "}
              {format(new Date(offer.createdDate), "dd/MM/yyyy")}
            </Card.Text>

            <Button
              onClick={() => handleRemoveOffer(offer.offerId)}
              variant="danger"
            >
              Eliminar Oferta
            </Button> */}
          </Card.Body>
        </Card>
      ))}
      {apiError && <Alert variant="danger">{apiError}</Alert>}
    </div>
  );
};

export default StudentsInOffer;