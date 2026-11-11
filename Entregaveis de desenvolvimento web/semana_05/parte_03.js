// Parte 3

let statusPoke = document.querySelector("#statusPokemon");
let resultadoPoke = document.querySelector("#resultadoPokemon");

document.querySelector("#formPokemon").addEventListener("submit", async e => {
    e.preventDefault();

    let nome = document.querySelector("#pokemon").value.trim().toLowerCase();

    if (nome === "") {
        statusPoke.textContent = "Digite um nome";
        return;
    }

    statusPoke.textContent = "Buscando...";
    resultadoPoke.innerHTML = "";

    try {
        let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if (resposta.status === 404) {
            statusPoke.textContent = "Pokémon não encontrado";
            return;
        }
        if (!resposta.ok) throw new Error();

        let dados = await resposta.json();
        let tipos = dados.types.map(t => t.type.name).join(", ");

        resultadoPoke.innerHTML = `
            <h3>${dados.name}</h3>
            <img src="${dados.sprites.front_default}" alt="${dados.name}">
            <p>Tipos: ${tipos}</p>
        `;
        statusPoke.textContent = "";
    } catch {
        statusPoke.textContent = "Falha na conexão";
    }
});
