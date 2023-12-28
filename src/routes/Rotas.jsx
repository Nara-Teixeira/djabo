import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../componentes/Login";
import Cadastro from "../componentes/Cadastro";
import Container from "../componentes/Container";
import DetailsProd from "../componentes/DetailsProd";

const isTokenPresent = () => {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined;
};

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isTokenPresent() ? <Navigate to="/Home" /> : <Login />}
        />

        <Route path="/Login" element={<Login />} />

        <Route path="/Cadastro" element={<Cadastro />} />

        <Route
          path="/Home"
          element={isTokenPresent() ? <Container /> : <Navigate to="/Login" />}
        />
        
        <Route path="/DetalhesDoProduto" element={<DetailsProd/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
