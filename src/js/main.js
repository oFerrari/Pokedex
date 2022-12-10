import '../css/style.css'

/* Selecionar Elementos no DOM */

const inputPesquisa = document.querySelector("#inputPesquisa")
const btnLocalizar = document.querySelector("#btnLocalizar")
const pokedexDisplay = document.querySelector("#display")

/* Adicionando Eventos */

btnLocalizar.addEventListener('click', async () => {
    /* Buscar os dados do pokemon na API */
    const dadosDoPokemon = await localizarPokemon(inputPesquisa.value)
    /* Criar o cartao do pokemon */
    criarCartao(dadosDoPokemon)
})

async function localizarPokemon(termoBusca){
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`
    const response = await fetch(url)
    const pokemon = await response.json();
    return pokemon
}

function criarCartao(pokemon){
    const cartaoPokemon = document.createElement('div')
    cartaoPokemon.className = 'cartaoPokemon'
    cartaoPokemon.innerHTML = `
    <div class="card" id="card">
    <h1 style="text-align: center;">${pokemon.name.toUpperCase()}<h1>
        <img class="pokemonSprite" src="${pokemon.sprites.other.dream_world.front_default}"/>
        
        <div class="alinhar">
        <div class="pokebola"></div>
        <h1>${pokemon.id}</h1>
        </div>
        
    </div>
    `
    pokedexDisplay.innerHTML = ''
    pokedexDisplay.appendChild(cartaoPokemon)
}
