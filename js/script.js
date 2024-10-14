const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

const backgrounds = {
    gengar: 'url("./backgrounds/background-gengar.svg")',
    raichu: 'url("./backgrounds/background-raichu.svg")',
    mewtwo: 'url("./backgrounds/background-mewtwo.svg")',
    venusaur: 'url("./backgrounds/background-venusaur.svg")',
    charizard: 'url("./backgrounds/background-charizard.svg")',
    blastoise: 'url("./backgrounds/background-blastoise.svg")',
    tyranitar: 'url("./backgrounds/background-tyranitar.svg")',
    lucario: 'url("./backgrounds/background-lucario.svg")'
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
