



function Cadastro() {

    const [confirmPass, setConfirmPass] = useState()
    const [numeroContato, setNumeroContato] = useState('');

    return (
        <div>
           
            <div className="FormCadastro">
                <form onSubmit={cadastrarUsuario}>

                    <div>
                        <label htmlFor="name" >Nome Completo</label>
                        <input
                            className="input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="input"
                            type="email"
                            id="email"
                            email="email"
                            value={email}
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input
                            className="input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPass">Confirme sua senha</label>
                        <input
                            className="input"
                            type="password"
                            id="confirmPass"
                            name="confirmPass"
                            placeholder="Confirme sua senha"
                            onChange={(e) => setConfirmPass(e.target.value)}
                            required
                            aria-invalid={!confirmPass}
                        />
                        {!confirmPass && <span style={{ color: 'red' }}>A confirmação de senha é obrigatória.</span>}
                    </div>

                    <div>
                        <label htmlFor="numeroContato">Número para Contato</label>
                        <input
                            type="tel"  
                            id="numeroContato"
                            name="numeroContato"
                            placeholder="Digite seu número de contato"
                            value={numeroContato}
                            onChange={(e) => setNumeroContato(e.target.value)}
                            pattern="[0-9]*"  
                            required 
                        />
                    </div>

                    <div>
                        <input className="input"
                            type="button"
                            value="cadastrar"
                            onClick={() => cadastro(email, password)} />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro