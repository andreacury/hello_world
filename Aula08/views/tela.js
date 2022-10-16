class Tela {
  constructor() {
    const janeiro = new Mes("Janeiro");
    janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
    janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
    janeiro.adicionarLancamento(
      new Lancamento("Conta de Luz", "despesa", 47.4)
    );
    janeiro.adicionarLancamento(
      new Lancamento("Conta de Água", "despesa", 91.29)
    );
    janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
    janeiro.adicionarLancamento(
      new Lancamento("Transporte", "despesa", 378.25)
    );
    janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 148.27));
    janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 700));
    janeiro.adicionarLancamento(new Lancamento("Cartão", "despesa", 978.25));
    janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 109.88));
    const fevereiro = new Mes("Fevereiro");
    fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
    fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
    fevereiro.adicionarLancamento(
      new Lancamento("Conta de Luz", "despesa", 88.7)
    );
    fevereiro.adicionarLancamento(
      new Lancamento("Conta de Água", "despesa", 163.94)
    );
    fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
    fevereiro.adicionarLancamento(
      new Lancamento("Transporte", "despesa", 357.21)
    );
    fevereiro.adicionarLancamento(
      new Lancamento("Alimentação", "despesa", 780)
    );
    fevereiro.adicionarLancamento(
      new Lancamento("Farmácia", "despesa", 116.77)
    );
    const marco = new Mes("Março");
    marco.adicionarLancamento(new Lancamento("Salário", "receita", 3500));
    marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 648.64));
    marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 71));
    marco.adicionarLancamento(
      new Lancamento("Conta de Água", "despesa", 134.2)
    );
    marco.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
    marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 450.35));
    marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 158));
    marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 960));
    const abril = new Mes("Abril");
    abril.adicionarLancamento(new Lancamento("Salário", "receita", 3500));
    abril.adicionarLancamento(new Lancamento("Aluguel", "despesa", 648.64));
    abril.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 68));
    abril.adicionarLancamento(
      new Lancamento("Conta de Água", "despesa", 115.2)
    );
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
    this.ano = ano;
  }

  formatarDinheiro(valor) {
    return new Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency",
    }).format(valor);
  }

  adicionarLancamento() {
    const mes = document.getElementById("mes");
    const categoria = document.getElementById("categoria");
    const tipo = document.getElementById("tipo");
    const valor = document.getElementById("valor");
    this.ano.adicionarLancamento(
      mes.value,
      new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))
    );
    this.ano.calcularSaldo();
    this.renderizar();
    mes.value = this.ano.meses[0].nome;
    categoria.value = "";
    tipo.value = "receita";
    valor.value = "";
  }

  renderizar() {
    document.getElementById("app").remove();
    const app = new Div("app");
    const titulo = new h4("Finanças Pessoais");
    app.adicionarElementoFilho(titulo.element);
    const form = new Div("form-lancamento");
    const mesSelect = new Select("mes");
    for (const mes of this.ano.meses) {
      mesSelect.addOption(mes.nome);
    }
    const tipoSelect = new Select("tipo");
    tipoSelect.addOption("receita");
    tipoSelect.addOption("despesa");
    const categoriaInputText = new Input("categoria", "text", "Categoria");
    const valorInputNumber = new Input("valor", "number", "Valor");
    const adicionarButton = new Button("botao", "Adicionar");
    adicionarButton.addListener(() => {
      this.adicionarLancamento();
    });
    form.adicionarElementoFilho(mesSelect.element);
    form.adicionarElementoFilho(tipoSelect.element);
    form.adicionarElementoFilho(categoriaInputText.element);
    form.adicionarElementoFilho(valorInputNumber.element);
    form.adicionarElementoFilho(adicionarButton.element);
    app.adicionarElementoFilho(form.element);

    const grafico = new Grafico();
    for (const mes of this.ano.meses) {
      grafico.adicionarColuna(mes.totalizador.saldo, mes.nome);
    }
    app.adicionarElementoFilho(grafico.element);
    for (const mes of this.ano.meses) {
      const nomeDoMes = new h4(mes.nome);
      app.adicionarElementoFilho(nomeDoMes.element);
      const tabelaLancamentos = new Tabela("tabela-lancamentos");
      tabelaLancamentos.addRow("th", ["Categoria", "Valor"]);
      for (const lancamento of mes.lancamentos) {
        tabelaLancamentos.addRow("td", [
          lancamento.categoria,
          this.formatarDinheiro(lancamento.getValorString()),
        ]);
      }
      tabelaLancamentos.addRow("th", [
        "Juros",
        this.formatarDinheiro(mes.totalizador.juros),
      ]);
      tabelaLancamentos.addRow("th", [
        "Rendimentos",
        this.formatarDinheiro(mes.totalizador.rendimentos),
      ]);
      tabelaLancamentos.addRow("th", [
        "Total",
        this.formatarDinheiro(mes.totalizador.saldo),
      ]);
      app.adicionarElementoFilho(tabelaLancamentos.element);
    }
    const [body] = document.getElementsByTagName("body");
    body.appendChild(app.element);
  }
}
