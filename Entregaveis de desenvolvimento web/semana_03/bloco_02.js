// Bloco 2

console.log(ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}


const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(15));

function dobro(n) {
    return n * 2;
}

const dobro2 = function (n) {
    return n * 2;
};

const dobro3 = n => n * 2;

console.log(dobro(5));
console.log(dobro2(5));
console.log(dobro3(5));

const dobro4 = (n = 1) => n * 2;
console.log(dobro4());
