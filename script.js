//OBSERVAÇÕES, as sections game e header estão com display none, é necessário remover quando o botão play for iniciado (pesquisar como fazer)

// Cauana escrever abaixo a partir daqui

// Fazer as instruções e o botão start ficarem escondidos quando o jogo se inicia >>

let instrutions = document.querySelector('instrutions');
let botaoStart = document.querySelector('play');

botaoStart.addEventListener('click', function hiddenInstrutions() {
instrutions.setAttribute('class', 'hidden');
});

// Criando as barras e os discos >>

// BARRAS >>

const barra= document.createElement('div')
barra.style.width = '2px'
barra.style.heigth = '10px'
barra.classList.add('barra')

const barraInicial = document.getElementById('torre-inicial')
barraInicial.appendChild('barra')

const barraMeio = document.getElementById('torre-centro')
barraMeio.appendChild('barra')

const barraFinal = document.getElementById('torre-final')
barraFinal.appendChild('barra')

// DISCOS >>


// Criando botão de reset >>

let botaoReset = document.querySelector('reset')
botaoReset.addEventListener('click') , function reset() {
    document.getElementById("game").reset();  
  }   

// Adicionando contagem de movimento >>


//Rômulo escrever abaixo a partir daqui