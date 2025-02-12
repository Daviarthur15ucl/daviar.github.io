// Calculadora
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value); // Avalia a expressão
}

// Conversor de Temperatura
function converterTemperatura() {
    const valor = parseFloat(document.getElementById('tempValor').value);
    const unidade = document.getElementById('tempUnit').value;
    let resultado = '';

    if (isNaN(valor)) {
        resultado = 'Digite um valor válido!';
    } else {
        if (unidade === 'C') {
            resultado = `Fahrenheit: ${(valor * 9/5) + 32}°F, Kelvin: ${valor + 273.15}K`;
        } else if (unidade === 'F') {
            resultado = `Celsius: ${(valor - 32) * 5/9}°C, Kelvin: ${((valor - 32) * 5/9) + 273.15}K`;
        } else if (unidade === 'K') {
            resultado = `Celsius: ${valor - 273.15}°C, Fahrenheit: ${(valor - 273.15) * 9/5 + 32}°F`;
        }
    }

    document.getElementById('resultadoTemp').innerText = 'Resultado: ' + resultado;
}

// Quiz
function responderQuiz(resposta) {
    const respostaCorreta = 'Brasília';
    if (resposta === respostaCorreta) {
        document.getElementById('resultadoQuiz').innerText = 'Resposta correta!';
    } else {
        document.getElementById('resultadoQuiz').innerText = 'Resposta incorreta!';
    }
}

// Adivinhação
let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Número entre 1 e 10

function verificarChute() {
    const chute = parseInt(document.getElementById('chute').value);
    if (chute === numeroAleatorio) {
        document.getElementById('resultadoAdivinhação').innerText = 'Você acertou!';
    } else {
        document.getElementById('resultadoAdivinhação').innerText = 'Tente novamente!';
    }
}
