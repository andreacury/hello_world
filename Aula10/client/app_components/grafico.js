class Grafico {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "grafico";
  }

  adicionarColuna(valor, descricao) {
    const coluna = document.createElement("div");
    coluna.className = "grafico-coluna";
    const cor = document.createElement("div");
    cor.style.height = (valor * 100) / 4000;
    cor.style.background = "rgb(71, 83, 119)";
    coluna.appendChild(cor);
    const nomeDoMes = document.createElement("div");
    nomeDoMes.className = "grafico-coluna-texto";
    nomeDoMes.innerText = descricao;
    coluna.appendChild(cor);
    coluna.appendChild(nomeDoMes);
    this.element.appendChild(coluna);
  }
}
