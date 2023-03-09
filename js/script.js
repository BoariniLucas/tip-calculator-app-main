const valorConta = document.querySelector('#billValue');
const qtdPessoas = document.querySelector('#numberPeople');
const btnGorjetas = document.querySelectorAll('#tipButtons');
const btnGorjetaCuston = document.querySelector('#customTip');




document.querySelector('#btnReset').addEventListener("click", imprime)


function imprime(){
  const teste = document.querySelector('#billValue').value
  event.preventDefault();
  console.log(teste);
}
