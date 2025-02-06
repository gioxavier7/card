'user strict'

const categorias =[
    {nome: 'Celures', icon: 'celular.png', cor: 'purple'},
    {nome: 'Informatica', icon: 'notebook.png', cor: 'blue'},
    {nome: 'Games', icon: 'controle.png', cor: 'blueviolet'},
    {nome: 'Moveis', icon: 'mesa.png', cor: 'red'}
]

function criarMenu(categoria){
    const novoItem = document.createElement('li')
    const novaImg = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImg.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)
