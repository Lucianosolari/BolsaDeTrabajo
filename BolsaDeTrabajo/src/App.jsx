import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfoForm from "./components/Students/PersonalInfoForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import AdminForm from "./components/Admin/AdminForm";
import RecoverPassword from "./components/Login/RecoverPassword";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <BrowserRouter>
          <NavBar />
          <Container className="flex-grow-1" style={{ marginTop: "90px" }}>
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
