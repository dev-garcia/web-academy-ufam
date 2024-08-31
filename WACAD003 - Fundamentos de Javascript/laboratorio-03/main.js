// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const largura = (canvas.width = window.innerWidth);
const altura = (canvas.height = window.innerHeight);

// function to generate random number

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function corAleatoria() {
  return `rgb(${aleatorio(0, 255)},${aleatorio(0, 255)},${aleatorio(0, 255)})`;
}

function Bola(x, y, velX, velY, cor, tamanho) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.cor = cor;
  this.tamanho = tamanho;
}

Bola.prototype.desenhar = function () {
  ctx.beginPath();
  ctx.fillStyle = this.cor;
  ctx.arc(this.x, this.y, this.tamanho, 0, 2 * Math.PI);
  ctx.fill();
};

Bola.prototype.atualizar = function () {
  if (this.x + this.tamanho >= largura) {
    this.velX = -this.velX;
  }

  if (this.x - this.tamanho <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.tamanho >= altura) {
    this.velY = -this.velY;
  }

  if (this.y - this.tamanho <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

Bola.prototype.detectarColisao = function () {
  for (let j = 0; j < bolas.length; j++) {
    if (!(this === bolas[j])) {
      const dx = this.x - bolas[j].x;
      const dy = this.y - bolas[j].y;
      const distancia = Math.sqrt(dx * dx + dy * dy);

      if (distancia < this.tamanho + bolas[j].tamanho) {
        bolas[j].cor = this.cor = corAleatoria();
      }
    }
  }
};

let bolas = [];

while (bolas.length < 25) {
  let tamanho = aleatorio(10, 20);
  let bola = new Bola(
    aleatorio(0 + tamanho, largura - tamanho),
    aleatorio(0 + tamanho, altura - tamanho),
    aleatorio(-7, 7),
    aleatorio(-7, 7),
    corAleatoria(),
    tamanho
  );

  bolas.push(bola);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, largura, altura);

  for (let i = 0; i < bolas.length; i++) {
    bolas[i].desenhar();
    bolas[i].atualizar();
    bolas[i].detectarColisao();
  }

  requestAnimationFrame(loop);
}

loop();
