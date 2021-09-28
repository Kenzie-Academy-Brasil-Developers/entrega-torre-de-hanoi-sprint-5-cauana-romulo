let barras = [[5,4,3,2,1], [], []]
let posicoes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0', 'b1', 'b2', 'b3']
let movimentos = []
function render(){
  barras.forwEach((barra, barraid) => {
    barra.forEach((disco, posicao) =>{
      let d= document.querySelector(' .d' +disco)
      posicoes.forEach(posicao => {
      d.classList.remove(posicoes)
    })
      d.classList.add('b' + (barraid+1))
      d.classList.add('p' + (posicao+1))
    })
  })
}

function mover(disco, tobarra){
    if(!barras[frombarra].length)return
  let disco = barras[frombarra].pop()
  if(!barras[tobarra].length){
      if(barras[tobarra][barras[tobarra].length-1]<disco){
          return barras[frombarra].push(disco)
      }
  }
  let d = document.querySelector(' .d' + disco)
  d.classList.add('p0')
  barras[tobarra].push(disco)
  setTimeout(render,400)
}

function clickbarra(n){
    if (movimentos.length && movimentos[0].lentgh == 1){
        movimentos[0].push(n)
    } else{
        movimentos.unshift([n])
    }
    setInterval(() => {
        
     if(movimentos.length && movimentos[movimentos.length-1].length ==2){
        let m = movimentos.pop()
        mover(m[0], m[1])
    }
}, 600)

render()