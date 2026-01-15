const convertButton = document.querySelector(".convert-button");

function convertValue(event) {
  

  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-convert");
  const currencyValueConverted = document.querySelector(".currency-value-converted");

  const selecionarMoeda = document.querySelector(".to-currency").value;
  
  

  const dolarToday = 5.3;
  const euroToday = 6.3;
 
switch (selecionarMoeda) { 
  case "EUR": 
    currencyValueConverted.innerHTML =
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputCurrencyValue / euroToday);
    break;

  case "USD":
    currencyValueConverted.innerHTML =
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputCurrencyValue / dolarToday);
    break;
}

  /*if (selecionarMoeda ==="euro") {
    
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
  }
 /*if (selecionarMoeda === "dolar") {
     
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
  }*/ 

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)


} 

function changeCurrency() {
   

  console.log("funcionou");

  }
selecionarMoeda.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);  