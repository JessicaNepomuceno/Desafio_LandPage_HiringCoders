import Produto from './dbProd.js';

const EnviaDados = document.getElementById('formulario');

EnviaDados.addEventListener('submit', (w) => {
  w.preventDefault();

  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let cpf = document.getElementById('cpf').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let logradouro = document.getElementById('logradouro').value;
  let numero = document.getElementById('numero').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;
  let cep = document.getElementById('cep').value;
  let estado = document.getElementById('estado').value;

  let data = {
    nome,
    sobrenome,
    cpf,
    email,
    telefone,
    logradouro,
    numero,
    bairro,
    cidade,
    cep,
    estado,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('InfosCliente', convertData)

  setTimeout(() => {
    window.location.href = "/index.html"
  }, 500)

})





//console.log(Produto);

