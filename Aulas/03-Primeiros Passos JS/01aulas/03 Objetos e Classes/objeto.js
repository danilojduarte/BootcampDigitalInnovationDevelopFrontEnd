// Objetos e Classes
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercuso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Branco', 1/12);

console.log(uno.calcularGastoDePercuso(70, 5));










// function compararPessoas(p1, p2) {
//     if (p1.idade > p2.idade) {
//         console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
//     } else if (p2.idade > p1.idade) {
//         console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
//     } else {
//         console.log(`${p2.nome} é ${p1.nome} tem a mesma idade`);
//     }
// }

// const danilo = new Pessoa ('Danilo', 38);
// const duarte = new Pessoa ('Duarte', 20);

// compararPessoas(danilo, duarte);