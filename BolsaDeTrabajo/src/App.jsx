import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/register" element={<div>en registro</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
