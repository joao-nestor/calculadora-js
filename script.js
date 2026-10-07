// Variáveis.
const visor = document.getElementById('numvisor');
const botoes = document.querySelectorAll('button');
const limpar = document.getElementById('limpar');
let operacao = '';
let num1 = '';
let num2 = '';
let res = '';

// Cria uma função que seleciona cada botão.
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {

    if (botao.innerText === '=' && visor.innerText === '0') { // Se clicar igual e tiver 0 no visor, continuará 0
        visor.innerText = '0';
    } else if (botao.innerText === '=' && visor.innerText !== '0' && num2 === '' && res === '') { // Se clicar igual e visor não for 0, mostrará o resultado.
        visor.innerText = num1;
    }
     else {
        if (!isNaN(Number(botao.innerText))) { // Verifica se o botão apertado NÃO é um número.
        if (operacao === '+' || operacao === '−' || operacao === '×' || operacao === '÷') { // Se tiver operação antes, salva o número na variável num2.
            num2 += botao.innerText;
            visor.innerText = num2;
        } else { // Se não tiver operação, salva na num1.
            num1 += botao.innerText;
            visor.innerText = num1;
        }
    } else if (res !== '' && operacao === '=' ) { // Para fazer operação depois do igual.
        num1 = res;
        operacao = botao.innerText;
        num2 = '';
        visor.innerText = '0';
    } else if (isNaN(Number(botao.innerText)) && (botao.innerText === '+' || botao.innerText === '−' || botao.innerText === '×' || botao.innerText === '÷')) { // Detecta se é um operador e qual é.
        operacao = botao.innerText;
        visor.innerText = '0';
        if (num2 !== '' && (operacao === '+' || operacao === '−' || operacao === '×' || operacao === '÷')) { // Permite fazer operações sucessivamente.
            num1 = res;
            num2 = '';
        }
    } else if (isNaN(Number(botao.innerText)) && (botao.innerText === '=')) { // Exibe o resultado.
        operacao = '=';
        visor.innerText = res;
    }
    if (botao.innerText === "=" && num2 === '' && res === '') { // Se o usuário apertar igual com só um número, esse número aparecerá no visor
        visor.innerText = num1;
    }
    }

// Cria um caso para cada operaçao.
if (num1 !== '' && num2 !== '') {
    switch (operacao) {
        case '+':
            res = Number(num1) + Number(num2);
            break;
        case '−':
            res = Number(num1) - Number(num2);
            break;
        case '×':
            res = Number(num1) * Number(num2);
            break;
        case '÷':
            if (num2 === '0') {
                res = 'Indefinido';
                visor.innerText = res;
            }
            else {
                res = Number(num1) / Number(num2)
            }
            break;
        case '=':
            visor.innerText = res
            break;
    }
}
    });
});

// Botão de limpar o visor e as variáveis.
limpar.addEventListener('click', zerar) 
function zerar() {
    num1 = '';
    num2 = '';
    operacao = '';
    res = '';
    visor.innerText = '0';
}