import "../styles/Login.sass"
import fundo from "../assets/images/adote2.png"
import login from "../services/login";
import React, { useState } from 'react';
import Input from "./InputLogin/Email";
import { BsPerson } from "react-icons/bs";


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




    console.log(email)
    console.log(password)

    return (
        <div className="body">
            <div className="left" style={{ backgroundImage: `url(${fundo})` }}>
                {/* <img className="imgFundo" src={fundo} alt="AdoteLogin" /> */}
            </div>

            <div className="form">

                <form onSubmit={logarUsuario}>

                   
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} label={"email"} icone={<BsPerson className="iconemail"/>}/>
                    <Input value={password} onChange={(e)=>setPassword(e.target.value)} label={"password"}/>
                    

                    
                    {/* <div>
                        <label className="label" htmlFor="password">senha <div className="iconemail" ><MdOutlineRemoveRedEye /></div> </label>
                        <input
                            className="input"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div> */}

                    <div>
                        <label className="lembre">
                            <input
                            className="checkbox"
                                type="checkbox"
                                checked={lembrar}
                                onChange={(e) => handleLembrarChange(e.target.value)}
                            />
                            <h4>Lembre-se de mim</h4>
                        </label>


                    </div>

                    <div>
                        <input className="botaoCadastrar"
                            type="submit"
                            value="login"
                            onClick={() => login(email, password)} />

                    </div>
                </form>
            </div>
        </div>

    );
};


export default Login;