// Parte 2

let statusCep = document.querySelector("#statusCep");
let resultado = document.querySelector("#resultadoCep");
let botao = document.querySelector("#botaoCep");

document.querySelector("#formCep").addEventListener("submit", async e => {
    e.preventDefault();

    let cep = document.querySelector("#cep").value.trim().replace(/\D/g, "");

    if (!/^\d{8}$/.test(cep)) {
        statusCep.textContent = "CEP inválido";
        return;
    }

    statusCep.textContent = "Buscando...";
    botao.disabled = true;

    try {
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) throw new Error();

        let dados = await resposta.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado";
        } else {
            resultado.replaceChildren();
            mostrar("Rua", dados.logradouro);
            mostrar("Bairro", dados.bairro);
            mostrar("Cidade", dados.localidade);
            mostrar("UF", dados.uf);
            statusCep.textContent = "";
        }
    } catch {
        statusCep.textContent = "Falha na conexão";
    }

    botao.disabled = false;
});

function mostrar(titulo, valor) {
    let dt = document.createElement("dt");
    dt.textContent = titulo;
    let dd = document.createElement("dd");
    dd.textContent = valor;
    resultado.append(dt, dd);
}
