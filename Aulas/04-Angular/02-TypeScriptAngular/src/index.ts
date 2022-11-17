// Tipos primitivos : boolean, number, string
let ligado:boolean = false;
let nome: string = "Danilo";
let idade: number = 38;
let altura: number = 1.69;

//Tipos especiais
//null
//undefined

let nulo: null = null;
let indefinido: undefined = undefined;


// Tipos abrangentes
//any
//void

let retorno:void;
let retornoView: any = false;

//Objeto sem previsibilidade
let produto: object = {
    name:"Danilo",
    cidade:"Natal",
    idade:38,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};
let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
}

// Array
let dados: string[] = ["danilo", "duarte"];
let dados2: Array<string> = ["Danilo", "Duarte"];

let infos: (string | number)[] = ["danilo", 222];

// Tuplas
let boleto:[string, number, number] = ["agua conta", 222, 1.1];

// Arrays Metodos
dados.filter("dados2");

// Datas
let  aniversario:Date = new Date( "04/10/1984");









// type heroi = {
//     name: string;
//     vulgo: string;
// };

// function printaObjetos(pessoa: heroi) {
//     console.log(pessoa);
// };

// printaObjetos({
//     name: "Tony Stark",
//     vulgo: "Homem de Ferro",
// });

// console.log("Olá mundo!");