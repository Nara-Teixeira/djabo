import "../styles/Login.sass"
import fundo from "../assets/images/adote2.png"
import login from "../services/login";
import React, { useState } from 'react';
import Input from "./InputLogin/Email";
import { BsPerson } from "react-icons/bs";
import Botao from "./buttonLogin/Botao";



function Login() {
    function logarUsuario(e) {
        e.preventDefault()
        console.log(`usuario ${email} foi cadastratado com a senha: ${password}`)
    }

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [lembrar, setLembrar] = useState(false);
    // Função para lidar com a mudança na opção "Lembrar-me"
    const handleLembrarChange = () => { setLembrar(!lembrar); };



    return (
        <div className="body">
            <div className="left"
                style={{ backgroundImage: `url(${fundo})` }}>

            </div>

            <div className="form">

                <form onSubmit={logarUsuario}>


                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={"email"}
                        icone={<BsPerson className="iconemail" />}
                    />

                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label={"password"}
                    />


                    <Botao
                        className="checkbox"
                        type={"checkbox"}
                        value={email}
                        value2={password}
                        onChange={(e) => handleLembrarChange(e.target.value)}

                    />

                    <Botao
                    className="botaologin"
                    type={"button"}
                    value={login}
                    onClick={ login(email, password)}

                    />

                </form>
            </div>
        </div>

    );
};


export default Login;