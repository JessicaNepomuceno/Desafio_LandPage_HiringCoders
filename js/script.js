const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  console.log(nome, email);

  let data = {
    nome,
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('Lead', convertData)

  let container = document.getElementById('contentForm')

  let cadastrado = `<p id="idcadastrado"> Cadastrado! Seu cupom foi enviado.</p>`

  setTimeout(() => {
    container.innerHTML = cadastrado
  }, 500)

})

