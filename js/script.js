const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

const backgrounds = {
    gengar: 'url("./backgrounds/background-gengar.jpg")',
    raichu: 'url("./backgrounds/background-raichu.jpg")',
    mewtwo: 'url("./backgrounds/background-mewtwo.jpg")',
    venusaur: 'url("./backgrounds/background-venusaur.jpg")',
    charizard: 'url("./backgrounds/background-charizard.jpg")',
    blastoise: 'url("./backgrounds/background-blastoise.jpg")',
    tyranitar: 'url("./backgrounds/background-tyranitar.jpg")',
    lucario: 'url("./backgrounds/background-lucario.jpg")'
};

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevNaListagem();
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

        mudarBackground(idPokedevSelecionado);
    });
});

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

function mudarBackground(idPokedevSelecionado) {
    const backgroundUrl = backgrounds[idPokedevSelecionado];
    if (backgroundUrl) {
        document.body.style.backgroundImage = backgroundUrl;
    }
}
