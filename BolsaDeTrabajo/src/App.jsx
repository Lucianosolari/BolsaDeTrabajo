import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfoForm from "./components/Students/PersonalInfoForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import AdminForm from "./Admin/AdminForm";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <BrowserRouter>
          <NavBar />
          <Container className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<div>en registro</div>} />
              <Route path="/studentsform" element={<PersonalInfoForm />} />
              <Route path="/admin" element={<AdminForm />} />
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
