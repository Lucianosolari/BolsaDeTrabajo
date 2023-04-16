import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsForm from "./components/Students/StudentsForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavBar />
          <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<div>en registro</div>} />
            <Route path="/studentsform" element={<StudentsForm/>}/>
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
