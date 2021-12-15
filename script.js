// variáveis globais 
const parentCircles = document.getElementById('balls');
const coresRGB = document.getElementById('rgb-color');
const placar = document.getElementById('score');
const btnReset = document.getElementById('reset-game');
const instrucoes = document.getElementById('answer');
let pontos = 0;

// funcao que gera a div contendo os circulos
function gerarCores(n) {
  const cores = []; // variavel que armazenara as cores R, G, B

  // linhas 15 a 27 refere-se a criacao de cada circulo

  for (let i = 0; i < n; i += 1) { // loop que define qtidade de itens que serao criados, de acordo com sua chamada.
    const circles = document.createElement('div'); // criacao elemento armazenara as cores
    parentCircles.appendChild(circles); // add ao nó pai.
    circles.className = 'ball'; // add class;
    const { r, g, b } = corRandomica(); // chamada da funcao gera cores randomicas, ja com objeto desestruturado.
    const cor = `rgb(${r}, ${g}, ${b})`; // variavel que dara composicao ao background dos circulos
    circles.style.backgroundColor = cor; // add background - color circulos;
    cores.push({ r, g, b }); // add as chaves r, g, b;

    circles.addEventListener('click', () => { // evento de clique nos circulos.
      checarResposta(cor); // funcao que checara se o jogador acertou ou nao a cor.
    });
  }

  // refere-se a escolha do codigo RGB entre os gerados para mostrar na tela.

  const codRGB = cores[Math.floor(Math.random() * n)]; // variavel que seleciona aleatoriamente entre os circulos o RGB que sera mostrado na tela.
  coresRGB.innerText = `(${codRGB.r}, ${codRGB.g}, ${codRGB.b})`; // add ao paragrafo o codigo RGB a ser adivinhado
}
gerarCores(6);

// Evento clique no botao Reset
btnReset.addEventListener('click', () => {
  instrucoes.innerText = 'Escolha uma cor!'; // sempre que o jogo é resetado, o texto muda.
  parentCircles.innerHTML = ''; // o no pai é zerado
  gerarCores(6); // chama novamente a funcao de criacao dos circulos
});

// funcao cria cores de forma randomica para cada elemento que compoe o RGB

function corRandomica() { // funcao que gerara as cores randomicas.
  const r = Math.floor(Math.random() * 250);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 252);
  return { r, g, b };
}

// funcao que checa se a escolha do jogador foi a correta ou nao e atualiza o placar.
function checarResposta(cor) {
  const check = `rgb${coresRGB.innerText}`;
  if (check === cor) {
    instrucoes.innerText = 'Acertou!';
    pontos += 3;
    placar.innerText = pontos;
  } else {
    instrucoes.innerText = 'Errou! Tente novamente!';
  }
}
