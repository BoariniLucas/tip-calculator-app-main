/*---   Element selects   ---*/
const valorConta = document.querySelector('#billValue');
const qtdPessoas = document.querySelector('#numberPeople');
const btnGorjetas = document.querySelectorAll('#tipButtons button');
const btnGorjetaCustom = document.querySelector('#btnTipCustom');
const valorGorjetaPessoa = document.querySelector('#inner-tip-value');
const valorTotalPessoa = document.querySelector('#inner-person-value');
const alrtValorZerado = document.querySelector('#text-warning');
const btnReset = document.querySelector('#btnReset');


/*---   Eventos   ---*/
//botões porcentagens gorjetas
btnGorjetas.forEach((btnTip) => {
  btnTip.addEventListener('click', (e) => {
    let porcentTip = e.target.innerText;
    let vlConta = valorConta.value;
    let numPessoas = qtdPessoas.value;
    let gorjetaResult = 0;
    let vlPorPessoa = 0; 
    
    switch (porcentTip) {
      case "5%":
        if(vlConta !== "" && vlConta !== "0" &&
             numPessoas !== "" && numPessoas !== "0") {
          resetAlert();

          gorjetaResult = (vlConta * 0.05);
          vlPorPessoa = (gorjetaResult / numPessoas) + (vlConta / numPessoas);

          imprimirValor(gorjetaResult, vlPorPessoa);

        } else {
          alert();
        };
        break;

      case "10%":
        if(vlConta !== "" && vlConta !== "0" &&
             numPessoas !== "" && numPessoas !== "0") {
          resetAlert();

          gorjetaResult = (vlConta * 0.10);
          vlPorPessoa = (gorjetaResult / numPessoas) + (vlConta / numPessoas);

          imprimirValor(gorjetaResult, vlPorPessoa);

        } else {
          alert();
        };
        break;

      case "15%":
        if(vlConta !== "" && vlConta !== "0" &&
             numPessoas !== "" && numPessoas !== "0") {
          resetAlert();

          gorjetaResult = (vlConta * 0.15);
          vlPorPessoa = (gorjetaResult / numPessoas) + (vlConta / numPessoas);

          imprimirValor(gorjetaResult, vlPorPessoa);

        } else {
          alert();
        };
        break;
        
      case "25%":
        if(vlConta !== "" && vlConta !== "0" &&
             numPessoas !== "" && numPessoas !== "0") {
          resetAlert();

          gorjetaResult = (vlConta * 0.25);
          vlPorPessoa = (gorjetaResult / numPessoas) + (vlConta / numPessoas);

          imprimirValor(gorjetaResult, vlPorPessoa);

        } else {
          alert();
        };
        break;  

      case "50%":
        if(vlConta !== "" && vlConta !== "0" &&
             numPessoas !== "" && numPessoas !== "0") {
          resetAlert();

          gorjetaResult = (vlConta * 0.50);
          vlPorPessoa = (gorjetaResult / numPessoas) + (vlConta / numPessoas);

          imprimirValor(gorjetaResult, vlPorPessoa);

        } else {
          alert();
        };
        break;
    }    
  });
});



//Tip Custom
btnGorjetaCustom.addEventListener('click', () => {
  
    const porcentCustom = (btnGorjetaCustom.value / 100);
    let vlContaCustom = valorConta.value;
    let numPessoasCustom = qtdPessoas.value;
    let gorjetaResultCustom = 0;
    let vlPorPessoaCustom = 0; 
    resetAlert();

    gorjetaResultCustom = (vlContaCustom * porcentCustom);
    vlPorPessoaCustom = (gorjetaResultCustom / numPessoasCustom) + (vlContaCustom / numPessoasCustom);

    imprimirValor(gorjetaResultCustom, vlPorPessoaCustom);  
});



//botão reset
btnReset.addEventListener('click', () => {
  resetarForm();
});



valorConta.addEventListener('input', () => {
  const campo = valorConta.value;

  if (campo !== null && campo !== '') {
    btnReset.disabled = false;
  } else{
    btnReset.disabled = true;
  }  
});



/*---   Funções   ---*/
function alert() {
  alrtValorZerado.style.display = 'inline-block';
  document.getElementById("numberPeople").style.border = "thick solid #CC7560";
}

function resetAlert() {
  alrtValorZerado.style.display = 'none';
  document.getElementById("numberPeople").style.border = "thick none";
}

function corVlores() {
  if (vlConta !== "" && vlConta !== "0") {
    valorConta.style.fontColor = "#004347"
  }
}

function imprimirValor(tip, totalPessoa){

  valorGorjetaPessoa.innerHTML = tip.toFixed(2);
  valorTotalPessoa.innerHTML = totalPessoa.toFixed(2);        
}

function resetarForm() {
  resetAlert();

  valorConta.value = "";
  qtdPessoas.value = "";
  btnGorjetaCustom.value = "";

  valorGorjetaPessoa.innerText = "0.00";
  valorTotalPessoa.innerText = "0.00";

  btnReset.disabled = true
}