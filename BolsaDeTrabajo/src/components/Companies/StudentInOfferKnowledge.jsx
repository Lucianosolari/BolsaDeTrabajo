import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { getStudentKnowledgeAsCompany } from "../../api";

const StudentInOfferKnowledge = () => {
    const { user } = useContext(UserContext);
    const [studentKnowledgeList, setStudentKnowledgeList] = useState([]);
    const [apiError, setApiError] = useState("");
    const { userId } = useParams();

    useEffect(() => {
        getStudentKnowledgeAsCompany(user.token, userId)
        .then((data) => {
            console.log(data);
            setStudentKnowledgeList(data);
            setApiError("");
        })
        .catch((error) => {
            setApiError(error.message);
        });
    }, [userId, user.token]);

    return (
    <div style={{ marginBlock: "20px" }}>
        <h1>Estudiante: Nombre y apellido</h1>
        {studentKnowledgeList.map((knowledge, index) => (
            <Card
                key={knowledge.knowledgeId}
                className={index % 2 === 0 ? "even-card" : "odd-card"}
            >
                <Card.Body>
                    <Card.Title>
                        Tipo de conocimiento: {knowledge.type}
                    </Card.Title>
                    <Card.Text>
                        Nivel: {knowledge.level}
                    </Card.Text>
                </Card.Body>
            </Card> 
        ))}
        {apiError}
    </div>
    );
}
export default StudentInOfferKnowledge;