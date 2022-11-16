// Pago por produto
const precoProduto = 10;
const formaPagamento = 2;
if (formaPagamento === 1){
  console.log(precoProduto -(precoProduto * 0.1));
} else if ( formaPagamento === 2){
  console.log( formaPagamento - (precoProduto * 0.15));
} else if ( formaPagamento === 3) {
  console.log(precoProduto);
} else {
  console.log( precoProduto + (precoProduto * 0.1));
}







// Calculo do IMC

// const peso = 80;
// const altura = 1.75;
// const imc = peso / Math.pow(altura,2);

// console.log (imc.toFixed(2));
// if (imc < 18.5) {
//   console.log('Abaixo de peso');
// } else if (imc >= 18.5 && imc < 25 ) {
//   console.log('Peso normal');
// } else if ( imc >= 25 && imc < 30) {
//   console.log('Acima do peso');
// } else if ( imc >= 30 && imc < 40) {
//   console.log('Obeso');    
// } else {
//   console.log('Obsidade Grave')
// }




// Nota e classificação
// const n1 = 8;
// const n2 = 10;
// const n3 = 8;

// const media = (n1 + n2 + n3) / 3;

// console.log(media.toFixed(2))

// if ( media < 5){
//   console.log('Reprovado')
// } else if ( media >= 5 && media <= 7) {
//   console.log("Recuperação");
// } else {
// console.log("Passou por media");
// }




// DESAFIO
// const valorEtanol = 5.79;
// const valorGasolina = 6.66;
// const consumokm = 10;
// const tipoConbustivel = "gasolina";

// const distanciaPercorrida = distanciaEmKm / kmPorLitros;

// if (valorEtanol === "Etanol") {
//   const valorGasto = distanciaPercorrida * valorEtanol;
//   console.log(consumokm.toFixed(2);
// } else {
//   const valorGasto = distanciaPercorrida * valorGasolina;
//   console.log(consumokm.toFixed(2));
// Operadores Codicionais
// const numero = 2;
// const numeroPar = (numero % 2) === 0;

// if (numeroPar) {
//     console.log('Par');
// } else {
//     console.log('Impar');
// }

// Formas de Declarar Variaveis

// Desafio Distancia por km consumidos
// const valorCombustivel  = 5.49;
// const kmPorLitros = 9;
// const distanciaEmKm = 100;

// const distanciaPercorrida = distanciaEmKm / kmPorLitros;

// const valorGasto = distanciaPercorrida * valorCombustivel;

// console.log(valorGasto.toFixed(2));
// Finalizado

//     let variavel = 10;

//     // const pi = 3.14;

// console.log(variavel);
