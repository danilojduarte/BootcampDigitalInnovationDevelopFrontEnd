// #Desafio: Somando Múltiplos

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
let soma = 0;
let i = 0;
while((a*i) <= N){
    soma += a*i;
    i++
}
print(soma)
// ======================================================

// #Desafio: Triângulo de Moedas

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
let N = parseInt(gets()); 

// let n = 1 + 8*N; 

//TODO: Retorne a altura máxima que o triângulos de moedas terá
let valorSubtraito = N;
let altura = 0;
for(let i = 1; i <=N; i++){
  if(valorSubtraito - i >= 0){
    valorSubtraito -= i;
    altura++
  }
}
print(altura)
// ======================================================

// #Desafio: Soma de Pares Consecutivos

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let x = parseInt(gets());
while (x != 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
    if  (x % 2 != 0)
    {
        x = x + 1      ;
    }
//Imprima a soma:
    x = x = (x + (x+2) + (x+4) + (x+6) + (x+8)) 
    print(x);
    x = parseInt(gets());
}

// ======================================================
// #Desafio: Calculando o Perímetro de um Triângulo Equilátero

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let pi = 3.14159265358979323846;
 
let a = gets();

let raio = 0;
let area = 0;

raio = a * Math.sqrt(3) / 3;
area = pi * Math.pow(raio, 2)

print("A area da circunferencia eh: " + area.toFixed(2));

//TODO: Retorne a área do perímetro do triângulo

// ======================================================
// #Desafio: Subtraindo o Produto e a Soma de um Número

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("");

let subtractProductAndSum = 0;
let n = 0;
let product = 1;
let sum = 0;

while( lines.length > 0) {
  n = parseInt(lines.shift());
  sum += n;
  product *= n;
}

subtractProductAndSum = product - sum;

print(subtractProductAndSum);
// ======================================================