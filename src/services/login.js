import api from "./api";

async function login(email, password) {
  console.log('Usuário logado',email,password);

  const response = await api.post('/login', {
    email: email,
    senha: password
  })
  
  console.log('deu bom',response)


}

export default login