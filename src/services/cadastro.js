import api from "./api";

async function cadastro(name, email, password, numeroContato) {
    try {
        // requisição post para cadastrar o usuário
        const responseCadastro = await api.post('/cadastro', {
            nome: name,
            email: email,
            senha: password,
            numero: numeroContato
        });

        console.log(responseCadastro);

        // requisição get para obter todos os dados após o cadastro
        const responseGetAll = await api.get('/all');
        console.log(responseGetAll);
    } catch (error) {
        console.error(error);
    }
}

export default cadastro;
