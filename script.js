const parentCircles = document.getElementById('balls');
const coresRGB = document.getElementById('rgb-color');
const placar = document.getElementById('score');
const btnReset = document.getElementById('reset-game');
const instrucoes = document.getElementById('answer');
let pontos = 0;

function gerarCores(n) {
  const cores = [];
  for (let i = 0; i < n; i += 1) {
    const balls = document.createElement('div');
    parentCircles.appendChild(balls);
    balls.className = 'ball';    
    const r = Math.floor(Math.random() * 250);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 252);
    const cor = `rgb(${r}, ${g}, ${b})`;
    balls.style.backgroundColor = cor;
      cores.push({ r, g, b });

    balls.addEventListener('click', () => {
      const check = `rgb${coresRGB.innerText}`;
      if (check === cor) {
        instrucoes.innerText = 'Acertou!';
        pontos +=3;
        placar.innerText = pontos;
      } else {
        instrucoes.innerText = 'Errou! Tente novamente!';
      }
    });
  }
  const codRGB = cores[Math.floor(Math.random() * n)];
  coresRGB.innerText = `(${codRGB.r}, ${codRGB.g}, ${codRGB.b})`;
}
gerarCores(6);

btnReset.addEventListener('click', () => {
  instrucoes.innerText = 'Escolha uma cor!';
  parentCircles.innerHTML = '';
  gerarCores(6);
});
