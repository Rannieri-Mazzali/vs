# 💱 Conversor de Moedas
### 🌐 Calculadora de transferências com API em tempo real

**Descrição**

Um conversor de moedas simples e responsivo que usa uma API pública para obter taxas de câmbio e converte valores entre moedas selecionadas. O projeto também atualiza as bandeiras e os códigos das moedas dinamicamente.

---

## ✅ Funcionalidades
- Conversão em tempo real usando API (`exchangerate-api`)
- Atualização automática das bandeiras ao trocar moedas
- Formatação de valores com `toLocaleString` (pt-BR)
- Interface moderna com animações CSS e layout responsivo
- Tratamento básico de erros

---

## 🧭 Estrutura do projeto
├── index.html
├── style.css
├── script.js
└── flag/
├── Brazil.png
├── EUR.png
├── american-flag-icon-2.png
└── Libra.png


---

## 🛠 Tecnologias
- HTML5
- CSS3 (animações, `clamp`, responsividade)
- JavaScript (Fetch API)
- API: `https://api.exchangerate-api.com/v4/latest/{moeda}`

---

## 📌 Como usar (localmente)
1. Clone ou baixe o repositório.
2. Abra `index.html` no navegador.
3. Insira o valor, selecione a moeda **De** e **Para** e clique em **Converter**.

---

## 🔎 Exemplo de uso no `script.js`
```javascript
const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
const data = await response.json();

const rate = data.rates[to];
const result = amount * rate;
