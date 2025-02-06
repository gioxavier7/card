'use strict'

const categorias = [
    { nome: 'Celulares', icon: 'celular.png', cor: 'blueviolet' },
    { nome: 'Informática', icon: 'notebook.png', cor: 'blueviolet' },
    { nome: 'Games', icon: 'controle.png', cor: 'blueviolet' },
    { nome: 'Móveis', icon: 'mesa.png', cor: 'blueviolet' }
]

function criarMenu(categoria) {
    const novoItem = document.createElement('li')
    const novaImg = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImg.src = `./img/${categoria.icon}`
    novaImg.alt = categoria.nome
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)

// CRIAÇÃO DOS CARDS COM DESCRIÇÕES PERSONALIZADAS
const produtos = [
    { 
        nome: 'Shoes', 
        img: 'nocta.webp', 
        preco: 'R$567,90', 
        cor: 'blueviolet', 
        estrelas: 4,
        descricao: 'NOCTA x Nike Hot Step 2 "Total White"'
    },
    { 
        nome: 'Earphone', 
        img: 'buds2.png', 
        preco: 'R$688,00', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Galaxy Buds2 Pro'
    },
    { 
        nome: 'Smartwatch', 
        img: 'smartwatch.png', 
        preco: 'R$5.499,00', 
        cor: 'blueviolet', 
        estrelas: 4,
        descricao: 'Apple Watch Series 10'
    },
    { 
        nome: 'Mobile', 
        img: 'iphone.png', 
        preco: 'R$9.815,', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Iphone 16 Pro Max'
    }
]

function criarCard(produto) {
    const container = document.getElementById('cards-container')
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <img src="./img/${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p class="price">${produto.preco}</p>
        <div class="stars">${'★'.repeat(produto.estrelas)}${'☆'.repeat(5 - produto.estrelas)}</div>
        <button class="${produto.cor}">Comprar Agora</button>
    `

    container.appendChild(card)
}

produtos.forEach(criarCard)
