import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { getStudentsInOffer, downloadStudentCvForCompany } from "../../api";
import { Alert, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

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

  const handleDownloadCV = async (student) => {
    try {
      const response = await downloadStudentCvForCompany(
        student.userId,
        user.token
      );
      const blob = await response.blob();

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `${student.name}-cv.pdf`;
      downloadLink.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginBlock: "20px" }}>
      <h1>Oferta: </h1>
      {registeredStudents.map((student, index) => (
        <Card
          key={student.offerId}
          className={index % 2 === 0 ? "even-card" : "odd-card"}
        >
          <Card.Body>
            <Card.Title>
              Nombre y apellido: {student.name} {student.surname}
            </Card.Title>
            <Button variant="info" onClick={() => handleDownloadCV(student)}>
              Descargar CV del estudiante
            </Button>
          </Card.Body>
        </Card>
      ))}
      {apiError && <Alert variant="danger">{apiError}</Alert>}
    </div>
  );
};

export default StudentsInOffer;
