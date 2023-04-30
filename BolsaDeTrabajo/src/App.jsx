import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfoForm from "./components/Students/PersonalInfoForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Button, Container } from "react-bootstrap";
import AdminForm from "./components/Admin/AdminForm";
import RecoverPassword from "./components/Login/RecoverPassword";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  //const [users, setUsers] = useState([]);

  const [token, setToken] = useState("");
  const [userType, setUserType] = useState("");

  const handleClick = () => {
    fetch("https://localhost:7069/api/Authentication/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: "string",
        Password: "string",
      }),
    })
      .then((response) => response.json()) // obtener el token como objeto JSON
      .then((data) => {
        setToken(data.token); // almacenar el token en el estado
        setUserType(data.userType); // almacenar el userType en el estado
      })
      .catch((error) => console.error(error));
  };

  const handleCreateOffer = () => {
    fetch("https://localhost:7069/api/Offer/createOffer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Agregamos el token en el encabezado 'Authorization'
      },
      body: JSON.stringify({
        offerTitle: "De react",
        offerSpecialty: "de react",
        offerDescription: "de react",
        createdDate: "2024-04-27T01:45:18.341Z",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <BrowserRouter>
          <NavBar />

          <Container className="flex-grow-1" style={{ marginTop: "90px" }}>
            <button onClick={handleClick}>Logear usuario</button>
            <button onClick={handleCreateOffer}>Crear Oferta</button>

            <div>
              {token && <p>Token: {token}</p>}
              {userType && <p>UserType: {userType}</p>}
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/studentsform" element={<PersonalInfoForm />} />
              <Route path="/admin" element={<AdminForm />} />
              <Route path="/recover-password" element={<RecoverPassword />} />
            </Routes>
          </Container>
        </BrowserRouter>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
