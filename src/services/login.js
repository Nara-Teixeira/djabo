import api from "./api";

async function login(email, password) {
try {
  console.log('Usuário logado', email, password);

  const response = await api.post('/login', {
    email: email,
    senha: password
  })

  // console.log('deu bom', response)
  const dados = response.data

  return dados
} catch (error) {
  // console.log('deu bom', error)
  return error.response.data.error
  
}
}


export default login