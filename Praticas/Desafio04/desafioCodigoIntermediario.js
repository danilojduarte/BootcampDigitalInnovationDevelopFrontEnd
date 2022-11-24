// #Desafio: Removendo Letras Duplicadas

const s = gets(); 



const newArray = [... new Set(s)]



const result = newArray.join('')



//TODO: Retorne as string sem as letras duplicadas





print(result)
// ===================================================
// #Desafio: Duplicando Zeros
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let N = parseInt(gets());

let arr = new Array(N);

for (let i = 0; i < N; i++){

arr[i] = parseInt(gets()); if(arr[i] === 0){ if((i+1) < N){ arr[i+1] = 0; i++; } }

} print(arr);
 
// TODO: Retorne uma saída com os zeros devidamente duplicados
// ===================================================
// #Desafio: Numeral Romano

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// TODO: crie um conversor que altere o Numeral Romano para um Inteiro e imprima esse inteiro

s = gets();

let valor = 0;

s = s.toUpperCase();

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

for(let i = 0; i < s.length; i++){ if((i+1) < s.length ){ if(map[s[i]] >= map[s[i+1]]){ valor += map[s[i]]; } else { valor -= map[s[i]]; } } else { valor += map[s[i]]; }}

print(valor);
// ===================================================
// #Desafio: Fatorial Desajeitado
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let lines = gets().split("\n"); 




let n = parseInt(lines.shift()); 

let rules = [ '*', '/', '+', '-' ];

if ( n >= 2 ) {

 let fnc_pos = 0;

 let ev = '';

 for( let l = n; l > 0; l-- ) {

  let v = l;

  v = v.toString();

  ev += v ;

  if ( fnc_pos > 3 ) {

   fnc_pos = 0;

  }

  if ( l === 0 ) break;

  if ( l > 1 ) {

   ev += rules[fnc_pos];

  }

  fnc_pos++;

 }

 let i;

 let mul = ev.match( /[0-9]*\*[0-9]*/gi);

 if ( mul.length > 0 ) {

  for ( i = 0; i < mul.length; i++ ) {

   ev = ev.replace(mul[i], eval(mul[i]));

  }

 }

 let div = ev.match( /[0-9]*\/[0-9]*/gi);

 if ( div.length > 0 ) {

  for ( i = 0; i < div.length; i++ ) {

   ev = ev.replace(div[i], parseInt(eval(div[i])));

  }

 }

 print ( eval( ev ) );

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".

// ===================================================
// #Desafio: Porcentagem de Diferença Entre Dois Números

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let A = parseInt(gets()), B= parseInt(gets()); 
 
// TODO: Calcule a porcentagem de diferença entre os dois valores
let  percentual = (B-A)/A*100; 

print(Math.trunc(percentual) + "%")
// ===================================================
