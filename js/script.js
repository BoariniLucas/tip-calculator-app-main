/*---   Element selects   ---*/
const valorConta = document.querySelector('#billValue');
const qtdPessoas = document.querySelector('#numberPeople');
const btnGorjetas = document.querySelectorAll('#tipButtons button');
const btnGorjetaCustom = document.querySelector('#btnTipCustom');
const valorGorjetaPessoa = document.querySelector('#tip-person-value');
const valorTotalPessoa = document.querySelector('#total-person-value');
const alrtValorZerado = document.querySelector('#text-warning');




/*---   Eventos   ---*/
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

          console.log(gorjetaResult);
          console.log(vlPorPessoa);

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

          console.log(gorjetaResult);
          console.log(vlPorPessoa);

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

          console.log(gorjetaResult);
          console.log(vlPorPessoa);

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

          console.log(gorjetaResult);
          console.log(vlPorPessoa);

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

          console.log(gorjetaResult);
          console.log(vlPorPessoa);

        } else {
          alert();
        };
        break;
    }    
  });
});

//Tip Custom
btnGorjetaCustom.addEventListener('click', () => {
  
    const teste = btnGorjetaCustom.value;
    console.log(teste); 
  
  
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

function imprimirValor(valor){
  valorGorjetaPessoa.innerHTML = valor;
}







function teste() {

}


