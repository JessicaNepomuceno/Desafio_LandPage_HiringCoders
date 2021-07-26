import Produto from './dbProd.js';

const form = document.getElementById('form');
const AddQuantidade = document.getElementById('idAddQuant');
const NomeProd = document.getElementById('idNome').innerText;
const FinalizarCompra = document.getElementById('idFinalizarCompra2');


console.log(AddQuantidade);
console.log(FinalizarCompra);



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


AddQuantidade.addEventListener('click', (f) => {

  f.preventDefault();

  var QuantidadeProduto = document.getElementById('Quant').value;

  console.log(QuantidadeProduto);
  console.log(NomeProd);

  var retorno = Produto.filter(Produts => Produts.nome == NomeProd)

  console.log(retorno);

  for (let i = 0; i <= Produto.length; i++) {
    //console.log(retorno[0].id);
    console.log(Produto[i].id == retorno[0].id);
    if (Produto[i].id == retorno[0].id) {

      Produto[i].quantidade = QuantidadeProduto;
      //console.log(QuantidadeProduto);
      //console.log(Produto[i].quantidade);

      let convertData = JSON.stringify(Produto);
      localStorage.setItem('Compra', convertData)

      let container = document.getElementById('idProd')
      let cadastrado = `<p id="idNome">Macarrons</p>
      <p id="idPreco">R$ 5,00 unid</p>
      <input id="Quant" type="text" placeholder="Quant" />
      <input id="idAddQuant" type="submit" value="Adicionado!" />`

      setTimeout(() => {
        container.innerHTML = cadastrado
      }, 500)

      return;
    }
  }
})

FinalizarCompra.addEventListener('click', (k) => {
  k.preventDefault();

  window.location.href = "/cadastra.html"

})



//console.log(Produto);

