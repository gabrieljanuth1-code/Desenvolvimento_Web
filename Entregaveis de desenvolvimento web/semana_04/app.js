// Bloco 1

let nomes = ["Ana", "Pedro", "Lucas"];
nomes.forEach(n => console.log("Olá, " + n + "!"));
console.log(nomes.map(n => n.toUpperCase()));

let precos = [10, 25, 40, 5, 60];
console.log(precos.filter(p => p > 20));
console.log(precos.reduce((soma, p) => soma + p, 0));

let produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 3 }
];
console.log(produtos.map(p => p.nome));
console.log(produtos.filter(p => p.preco < 50));
console.log(produtos.reduce((soma, p) => soma + p.preco, 0));
produtos.forEach(p => console.log(p.nome + ": R$ " + p.preco));


// Bloco 2

document.querySelector("#titulo").textContent = "Semana 04";

document.querySelectorAll(".texto").forEach(p => console.log(p.textContent));

let lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item 1</li><li>Item 2</li>";

let li = document.createElement("li");
li.textContent = "Terceiro item";
lista.append(li);
li.classList.add("destaque");
console.log(li.classList.contains("destaque"));

let tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(t => {
    let item = document.createElement("li");
    item.textContent = t;
    lista.append(item);
});
lista.querySelector("li").classList.add("feito");
console.log(document.querySelectorAll("li").length);


// Bloco 3

let botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));
botao.addEventListener("mouseover", () => botao.textContent = "Pode clicar!");

let nome = document.querySelector("#nome");
nome.addEventListener("keyup", () => console.log(nome.value));

lista.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

let novo = document.createElement("li");
novo.textContent = "Item novo";
lista.append(novo);

let tarefa = document.querySelector("#tarefa");
document.querySelector("#formulario").addEventListener("submit", e => {
    e.preventDefault();
    if (tarefa.value.trim() === "") return;

    let item = document.createElement("li");
    item.textContent = tarefa.value.trim();
    lista.append(item);
    tarefa.value = "";
});
