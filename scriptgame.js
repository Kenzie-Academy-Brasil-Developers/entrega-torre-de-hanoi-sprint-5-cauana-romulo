let barras = [[5,4,3,2,1], [], []] //representação das torres
let posicoes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0',
                 'b1', 'b2', 'b3', ]
let movimentos = []
function render() { // função para renderizar o jogo
  barras.forEach((barra, barraid) => { // o forEach esta me dando dois parametros, as barras, e por segundo o indice.
    barra.forEach((disco, posicao) =>{ // aqui ele me da o disco e a posição.
      let d=document.querySelector(' .d' +disco)
      posicoes.forEach(posicao => {
      d.classList.remove(posicao) // remove todas as posições, inclusive a p0 que é a posição de transição.
    })
      d.classList.add('b' + (barraid+1)) //adicionando a torre
      d.classList.add('p' + (posicao+1)) //adicionando posição
    })
  })
}
function mover(frombarra, tobarra){ // função responsavel pela movimentação dos discos.
  if(!barras[frombarra].length)return // retirando a possibilidade de movimentos invalidos.
let disco = barras[frombarra].pop()
if(barras[tobarra].length){
    if(barras[tobarra][barras[tobarra].length-1]<disco){
        return barras[frombarra].push(disco) // devolve o disco para a torre caso o movimento seja invalido
    }
}
let d = document.querySelector(' .d' + disco)
d.classList.add('p0')
barras[tobarra].push(disco)
setTimeout(render,400)
}

function clickbarra(n){ //função para click duplo, direcionando a movimentação.
  if(movimentos.length && movimentos[0].length ==1){
    movimentos[0].push(n)
  } else{
    movimentos.unshift([n])
    }
  }
  
  setInterval(()=>{
    if(movimentos.length && movimentos[movimentos.length-1].length ==2){
      let m = movimentos.pop();
      mover(m[0], m[1]);
    }
  },600)
 
render()