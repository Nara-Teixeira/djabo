import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../componentes/Login";
import Cadastro from "../componentes/Cadastro";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>


    )
}

export default Rotas