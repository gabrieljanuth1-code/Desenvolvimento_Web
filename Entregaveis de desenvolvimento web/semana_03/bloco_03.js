// Bloco 3

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(7));
console.log(classificarNota(5));

let corSemaforo = "verde";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + 5 * i);
}

let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " par");
    } else {
        console.log(i + " ímpar");
    }
}

let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num + " par");
    } else {
        console.log(num + " ímpar");
    }
    num++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(3));
console.log(diaDaSemana(10));
