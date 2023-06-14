import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getPendingCompanies } from "../../api"; //removeStudentFromOffer
import { format } from "date-fns";
import { Card, Button } from "react-bootstrap";

const PendingCompanies = () => {
  const { user } = useContext(UserContext);
  const [pendingCompanies, setPendingCompanies] = useState([]);

  useEffect(() => {
    getPendingCompanies(user.token)
      .then((data) => {
        setPendingCompanies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUpdatePendingCompany = (companyId) => {
    updatePendingCompany(companyId, user.userId, user.token)
      .then(() => {
        const updatedCompanies = pendingCompanies.filter(
          (company) => company.companyId !== companyId
        );
        setPendingCompanies(updatedCompanies);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ marginBlock: "20px" }}>
      {pendingCompanies.map((company, index) => (
        <Card
          key={company.companyId}
          className={index % 2 === 0 ? "even-card" : "odd-card"}
        >
          <Card.Body>
            <Card.Title> {company.companyName}</Card.Title>

            <Card.Text> Rubro: {company.companyLine}</Card.Text>
            <Card.Text> Ciudad: {company.companyLocation}</Card.Text>

            <Button
              onClick={() => handleUpdatePendingCompany(company.companyId)}
              variant="danger"
            >
              Habilitar compañía
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PendingCompanies;
