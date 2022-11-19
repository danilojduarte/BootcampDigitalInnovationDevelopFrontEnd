
const {gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteados.push(numerosSorteados);
}

let maiorValor= 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteados = numerosSorteados[i];
    if (numerosSorteados > maiorValor) {
        maiorValor = numerosSorteados;
    }
}