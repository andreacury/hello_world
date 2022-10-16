const janeiro = new Mes("Janeiro");
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 47.4));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 91.29));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 378.25));
janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 148.27));
//janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 700));
//janeiro.adicionarLancamento(new Lancamento("Cartão", "despesa", 978.25));
//janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 109.88));

const fevereiro = new Mes("Fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 88.7));
fevereiro.adicionarLancamento(
  new Lancamento("Conta de Água", "despesa", 163.94)
);
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
//fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 357.21));
//fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 780));
//fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 116.77));

const marco = new Mes("Março");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3500));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 648.64));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 71));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 134.2));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 450.35));
//marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 158));
//marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 960));

const abril = new Mes("Abril");
abril.adicionarLancamento(new Lancamento("Salário", "receita", 3500));
abril.adicionarLancamento(new Lancamento("Aluguel", "despesa", 648.64));
abril.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 68));
abril.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 115.2));
abril.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
abril.adicionarLancamento(new Lancamento("Transporte", "despesa", 317.84));
abril.adicionarLancamento(new Lancamento("Lazer", "despesa", 97));
abril.adicionarLancamento(new Lancamento("Alimentação", "despesa", 990));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();

janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 250));
marco.adicionarLancamento(new Lancamento("Escola", "despesa", 250));
ano.calcularSaldo();

console.log(ano.meses);

function addElement(parent, elementType, text) {
  const element = document.createElement(elementType);
  if (text !== "" && text !== undefined && text !== null) {
    element.innerText = text;
  }
  parent.appendChild(element);
}

function renderizar() {
  const app = document.getElementById("app");
  if (app.firstChild) {
    app.firstChild.remove();
  }
  const painel = document.createElement("div");
  const grafico = document.createElement("div");
  grafico.className = "grafico";
  for (const mes of ano.meses) {
    const coluna = document.createElement("div");
    coluna.className = "grafico-coluna";
    const cor = document.createElement("div");
    cor.style.height = (mes.totalizador.saldo * 100) / 6000;
    cor.style.background = "rgb(71, 83, 119)";
    coluna.appendChild(cor);
    const nomeDoMes = document.createElement("div");
    nomeDoMes.className = "grafico-coluna-texto";
    nomeDoMes.innerText = mes.nome;
    coluna.appendChild(cor);
    coluna.appendChild(nomeDoMes);
    grafico.appendChild(coluna);
  }
  painel.appendChild(grafico);

  for (const mes of ano.meses) {
    addElement(painel, "h4", mes.nome);
    const tabelaLancamento = document.createElement("table");
    tabelaLancamento.className = "tabela-lancamentos";
    const linhaTitulo = document.createElement("tr");
    addElement(linhaTitulo, "th", "Categoria");
    addElement(linhaTitulo, "th", "Valor");
    tabelaLancamento.appendChild(linhaTitulo);
    for (const lancamento of mes.lancamentos) {
      const linhaLancamento = document.createElement("tr");
      addElement(linhaLancamento, "td", lancamento.categoria);
      addElement(linhaLancamento, "td", formatarDinheiro(lancamento.valor));
      tabelaLancamento.appendChild(linhaLancamento);
    }

    const linhaJuros = document.createElement("tr");
    addElement(linhaJuros, "th", "Juros");
    addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
    tabelaLancamento.appendChild(linhaJuros);
    const linhaRendimentos = document.createElement("tr");
    addElement(linhaRendimentos, "th", "Rendimentos");
    addElement(
      linhaRendimentos,
      "th",
      formatarDinheiro(mes.totalizador.rendimentos)
    );
    tabelaLancamento.appendChild(linhaRendimentos);
    const linhaSaldo = document.createElement("tr");
    addElement(linhaSaldo, "th", "Total");
    addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
    tabelaLancamento.appendChild(linhaSaldo);
    painel.appendChild(tabelaLancamento);
  }
  app.appendChild(painel);
}

renderizar();

function adicionarLancamento() {
  const mes = document.getElementById("mes");
  const categoria = document.getElementById("categoria");
  const tipo = document.getElementById("tipo");
  const valor = document.getElementById("valor");
  ano.adicionarLancamento(
    mes.value,
    new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))
  );
  ano.calcularSaldo();
  renderizar();
  mes.value = ano.meses[0].nome;
  categoria.value = "";
  tipo.value = "receita";
  valor.value = "";
}

const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
  const option = document.createElement("option");
  option.text = mes.nome;
  mesSelect.add(option);
}
