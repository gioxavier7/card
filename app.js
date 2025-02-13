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
        preco: 'R$1.652,99', 
        cor: 'blueviolet', 
        estrelas: 4,
        descricao: 'NOCTA x Nike Hot Step 2 "Total White"',
        link: 'https://www.nike.com.br/nocta-x-nike-hot-step-2-029190.html?cor=51' 
    },
    { 
        nome: 'Earphone', 
        img: 'buds2.png', 
        preco: 'R$1.270,15', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Galaxy Buds2 Pro',
        link: 'https://www.samsung.com/br/audio-sound/galaxy-buds/galaxy-buds2-pro-white-sm-r510nzwpzto/' 
    },
    { 
        nome: 'Smartwatch', 
        img: 'smartwatch.png', 
        preco: 'R$5.499,00', 
        cor: 'blueviolet', 
        estrelas: 4,
        descricao: 'Apple Watch Series 10',
        link: 'https://www.apple.com/br/apple-watch-series-10/' 
    },
    { 
        nome: 'Mobile', 
        img: 'iphone.png', 
        preco: 'R$10.499', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Iphone 16 Pro Max',
        link: 'https://www.apple.com/br/iphone-16-pro/' 
    }
]

function criarCard(produto) {
    const container = document.getElementById('cards-container')

    // CRIANDO O CARD
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${produto.img}`
    img.alt = produto.nome

    const titulo = document.createElement('h3')
    titulo.textContent = produto.nome

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const preco = document.createElement('p')
    preco.classList.add('price')
    preco.textContent = produto.preco

    const estrelasContainer = document.createElement('div')
    estrelasContainer.classList.add('stars')
    
    // ESTRELAS (VAZIAS OU PREENCHIDAS)
    for (let i = 0; i < produto.estrelas; i++) {
        const estrela = document.createElement('span')
        estrela.textContent = '★'
        estrelasContainer.appendChild(estrela)
    }
    for (let i = produto.estrelas; i < 5; i++) {
        const estrela = document.createElement('span')
        estrela.textContent = '☆'
        estrelasContainer.appendChild(estrela)
    }

    const botao = document.createElement('button')
    botao.textContent = 'Comprar Agora'
    botao.classList.add(produto.cor)

    botao.addEventListener('click', () => {
        window.open(produto.link, '_blank')
    })

    // ADIOCIONANDO OS ELEMENTOS NO CARD
    card.appendChild(img)
    card.appendChild(titulo)
    card.appendChild(descricao)
    card.appendChild(preco)
    card.appendChild(estrelasContainer)
    card.appendChild(botao)

    container.appendChild(card)
}

produtos.forEach(criarCard)
