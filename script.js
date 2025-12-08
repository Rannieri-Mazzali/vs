//-----------------------------------
// CAMINHOS DAS BANDEIRAS
//-----------------------------------
const flagPaths = {
    USD: "./flag/american-flag-icon-2.png",
    EUR: "./flag/EUR.png",
    BRL: "./flag/Brazil.png",
    GBP: "./flag/Libra.png",
};

//-----------------------------------
// ATUALIZA BANDEIRAS E CÓDIGOS DE MOEDA
//-----------------------------------
function updateFlags() {

    const from = document.querySelector("#from-currency").value;
    const to   = document.querySelector("#to-currency").value;

    // ESQUERDA → DE:
    document.querySelector("#resultados img").src = flagPaths[from];
    document.querySelector(".two-converted").innerHTML = from;

    // DIREITA → PARA: one-convert
    document.querySelector(".resultado img").src = flagPaths[to];
    document.querySelector(".one-convert").innerHTML = to;
}

//-----------------------------------
// CONVERTER (COM API REAL)
//-----------------------------------
async function convertValue(event) {

    event.preventDefault();

    const amount = Number(document.querySelector("#input001").value);
    const from   = document.querySelector("#from-currency").value;
    const to     = document.querySelector("#to-currency").value;

    const leftValue  = document.querySelector(".two-value-converted");
    const rightValue = document.querySelector(".one-value-convert");   
    updateFlags(); // garante atualização visual

    if (!amount) {
        leftValue.innerHTML  = "0,00";
        rightValue.innerHTML = "0,00";
        return;
    }

    try {

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data     = await response.json();

        const rate = data.rates[to];
        const result = amount * rate;

        // ESQUERDA (valor original)
        leftValue.innerHTML = amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: from
        });

        // DIREITA (valor convertido)
        rightValue.innerHTML = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: to
        });

    } catch (error) {
        alert("Erro ao converter. Tente novamente.");
    }
}

//-----------------------------------
// EVENTOS
//-----------------------------------
document.querySelector(".convert-button").addEventListener("click", convertValue);
document.querySelector("#from-currency").addEventListener("change", updateFlags);
document.querySelector("#to-currency").addEventListener("change", updateFlags);

// Atualiza ao carregar
updateFlags();
