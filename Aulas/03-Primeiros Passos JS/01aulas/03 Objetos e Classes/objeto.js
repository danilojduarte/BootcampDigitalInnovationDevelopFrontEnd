// Objetos e Classes
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
          return this.peso / (this.altura * this.altura);
    }
    classifcarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
                return "Abaixo de peso";
              } else if (imc >= 18.5 && imc < 25) {
                return "Peso normal";
              } else if (imc >= 25 && imc < 30) {
                return "Acima do peso";
              } else if (imc >= 30 && imc < 40) {
                return "Obeso";
              } else {
                return "Obsidade Grave";
              }
            }
    }


    const jose = new Pessoa('jose', 70, 1.65);
    console.log(jose.calcularImc());
    const danilo = new Pessoa('danilo', 84, 1.69);
    console.log(danilo.classifcarImc());

















// class Carro {
//     marca;
//     cor;
//     gastoMedioPorKm;

//     constructor(marca, cor, gastoMedioPorKm){
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoMedioPorKm = gastoMedioPorKm;
//     }
//     calcularGastoDePercuso(distanciaKm, precoCombustivel){
//         return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
//     }
// }

// const uno = new Carro('Fiat', 'Branco', 1/12);

// const attrative = new Carro('Fiat', 'Preto', 1/10);

// console.log(uno.calcularGastoDePercuso(70, 5));
// console.log(attrative.calcularGastoDePercuso(70, 5));










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