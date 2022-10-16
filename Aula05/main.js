const saldoInicial = 0;
const janeiro = new Mes("Janeiro", saldoInicial);
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 47.4));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 91.29));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 378.25));
janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 148.27));
janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 700));
janeiro.adicionarLancamento(new Lancamento("Cartão", "despesa", 978.25));
janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 109.88));
janeiro.calcularSaldo();
console.log(janeiro);

const fevereiro = new Mes("Fevereiro", janeiro.totalizador.saldo);
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 2600));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 616));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 88.7));
fevereiro.adicionarLancamento(
  new Lancamento("Conta de Água", "despesa", 163.94)
);
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 357.21));
fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 780));
fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 116.77));
fevereiro.calcularSaldo();
console.log(fevereiro);

const marco = new Mes("Março", fevereiro.totalizador.saldo);
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3500));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 648.64));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 71));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 134.2));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 105.9));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 450.35));
marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 158));
marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 960));
marco.calcularSaldo();
console.log(marco);
