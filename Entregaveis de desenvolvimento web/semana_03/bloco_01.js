// Bloco 1

let pontos = 0;
pontos = pontos + 10;
console.log(pontos);

const MAX_PONTOS = 100;
// MAX_PONTOS = 200;
// se tirar o // da linha de cima da TypeError, porque const nao pode mudar de valor
console.log(MAX_PONTOS);

let cachorro = "Bob";
let idade = 3;
let vacinado = true;
let raca;
let dono = null;

console.log(typeof cachorro);
console.log(typeof idade);
console.log(typeof vacinado);
console.log(typeof raca);
console.log(typeof dono);

console.log(`O ${cachorro} tem ${idade} anos`);
console.log("O " + cachorro + " tem " + idade + " anos");
