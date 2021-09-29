// Cauana escrever abaixo a partir daqui


const botaoStart = document.getElementById('play')
botaoStart.addEventListener('click' , hiddenInstrutionsEShowGame);

// Fazer as instruções e o botão start ficarem escondidos quando o jogo se inicia >>

let instrutions = document.getElementById('instrutions');
let game = document.getElementsByClassName('game')[0]

function hiddenInstrutionsEShowGame() {

  instrutions.classList.add('hidden'); //Estou adicionando uma classe no style com display none
  game.classList.remove('game')
  game.classList.add('showGame')
  torre()  
};

// Criando as barras e os discos >>
function torre() {
// BARRAS >>
//fazer um style para a classe barra1/2/3 > acertar a largura altura e background por lá e no css definir, pegar um barra.setatrribute e definir 
const barra = document.createElement('div')
barra.classList.add('barra')


const barraInicial = document.getElementById('torre-inicial')
barraInicial.setAttribute('class', 'barra')

const barraMeio = document.getElementById('torre-centro')
barraMeio.setAttribute('class', 'barra')

const barraFinal = document.getElementById('torre-final')
barraFinal.setAttribute('class', 'barra')

// // DISCOS 

const disco1 = document.createElement('div')
const disco2 = document.createElement('div')
const disco3 = document.createElement('div')
const disco4 = document.createElement('div')
const disco5 = document.createElement('div')

disco1.classList.add('disco1')
disco2.classList.add('disco2')
disco3.classList.add('disco3')
disco4.classList.add('disco4')
disco5.classList.add('disco5')

barraInicial.appendChild(disco5);
barraInicial.appendChild(disco4);
barraInicial.appendChild(disco3);
barraInicial.appendChild(disco2);
barraInicial.appendChild(disco1);


} // fim da função torre

// Criando botão de reset >>

let botaoReset = document.getElementById('reset')
console.log(botaoReset)
botaoReset.addEventListener('click', function reset() {
    document.getElementById("game").reset();  
  })

// Adicionando contagem de movimento >>


//Rômulo escrever abaixo a partir daqui
