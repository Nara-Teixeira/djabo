import "../styles/Login.sass"
import { Link,useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import fundo from "../assets/images/adote2.png"
import login from "../services/login";
import React, { useState } from 'react';
import Input from "./InputLogin/Email";
import { BsPerson } from "react-icons/bs";
import Botao from "./buttonLogin/Botao";
import BotaoLC from "./buttonLogin/BotaoLc";



function Login() {
    function logarUsuario(e) {
        e.preventDefault()
        console.log(`usuario ${email} foi logado com a senha: ${password}`)
    }

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [lembrar, setLembrar] = useState(false);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    // Função para lidar com a mudança na opção "Lembrar-me"
    const handleLembrarChange = () => { setLembrar(!lembrar); };
    const handleButtonClick = async () => {
        const dados = await login(email, password); // Chama a função de login com email e senha
        console.log("dados ----- : ", dados)

        if(dados.token){
            const token = dados.token
            console.log("token: ", token)
            localStorage.setItem('token', token)
            navigate('/Home')
            console.log('aoba')
        }   

    };

    // const fazerRequisicao = async () => {
    //     try {
            
    //         setToken(dados.token);
    //         console.log(dados.token)
    //         localStorage.setItem('token', dados.token);
    //         console.log(dados.token, "aaaa")
    //     } catch (erro) {
    //         console.error('Erro ao obter o token:', erro);
    //     }
    // };


    return (

        <div className="body">
            <Navbar />
            <div className="left"
                style={{ backgroundImage: `url(${fundo})` }}>

            </div>

            <div className="form">

                <BotaoLC />

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

                    <div>

                        <label className="labelCadastrar">

                                <button
                                    className="BotaoLogar"
                                    type="button"
                                    value={login}
                                    onClick={handleButtonClick}

                                > <h3>Login</h3>
                                </button>

                        </label>
                    </div>



                </form>
            </div>
        </div>

    );
};


export default Login;