import api from "./api";

async function login(email, password) {
  await api.post('/login', {
    email: email,
    senha: password
  })
    .then(function (response) {
      console.log('deu viu',response.token);
    })
    .catch(function (error) {
      console.error(error);
    });

}

export default login