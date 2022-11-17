// Princio de funcoes



function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicandoJuros(valor){
    return (valor + (valor * (desconto / 100)));
}

const precoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
  console.log(aplicarDesconto(precoProduto, 10));
} else if ( formaPagamento === 2){
    console.log(aplicarDesconto(precoProduto, 15));
} else if ( formaPagamento === 3) {
  console.log(precoProduto);
} else {
  console.log( precoProduto + (precoProduto * 10));
}


// function verficarIdade(idade) {
//   if (idade >= 18) {
//     console.log("maior de idade");
//   } else {
//     console.log("Menor de idade");
//   }
// }

// verficarIdade(22);

// function escrevaMeuNome(nome) {
//     console.log('Meu nome é ' + nome);
//   }
//   escrevaMeuNome('Danilo');
