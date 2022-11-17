type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
};

printaObjetos({
    name: "Tony Stark",
    vulgo: "Homem de Ferro",
});

// console.log("Olá mundo!");