import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPersonalInfoForm from "./components/Students/RegisterPersonalInfoForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import AdminForm from "./components/Admin/AdminForm";
import RecoverPassword from "./components/Login/RecoverPassword";
import Login from "./components/Login/Login";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import CreateOffer from "./components/Offers/CreateOffer";

function App() {
  return (
    <>
      <UserProvider>
        <div className="d-flex flex-column min-vh-100">
          <BrowserRouter>
            <NavBar />

            <Container className="flex-grow-1" style={{ marginTop: "90px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/studentsform"
                  element={<RegisterPersonalInfoForm />}
                />
                <Route path="/admin" element={<AdminForm />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route path="/createOffer" element={<CreateOffer />} />
              </Routes>
            </Container>
          </BrowserRouter>
          <div>
            <Footer />
          </div>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
