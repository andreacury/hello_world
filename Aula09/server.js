const express = require("express");
const app = express();
app.use(express.json());
app.use("/", express.static("./client"));

const lancamentos = [
  { mes: "Janeiro", categoria: "Salário", tipo: "receita", valor: 2600 },
  { mes: "Janeiro", categoria: "Aluguel", tipo: "despesa", valor: 616 },
  { mes: "Janeiro", categoria: "Conta de Luz", tipo: "despesa", valor: 47.4 },
  { mes: "Janeiro", categoria: "Conta de Água", tipo: "despesa", valor: 91.29 },
  { mes: "Janeiro", categoria: "Internet", tipo: "despesa", valor: 105.9 },
  { mes: "Janeiro", categoria: "Transporte", tipo: "despesa", valor: 378.25 },
  { mes: "Janeiro", categoria: "Lazer", tipo: "despesa", valor: 148.27 },
  { mes: "Fevereiro", categoria: "Salário", tipo: "receita", valor: 2600 },
  { mes: "Fevereiro", categoria: "Aluguel", tipo: "despesa", valor: 616 },
  { mes: "Fevereiro", categoria: "Conta de Luz", tipo: "despesa", valor: 88.7 },
  {
    mes: "Fevereiro",
    categoria: "Conta de Água",
    tipo: "despesa",
    valor: 163.94,
  },
  { mes: "Fevereiro", categoria: "Internet", tipo: "despesa", valor: 105.9 },
  { mes: "Fevereiro", categoria: "Transporte", tipo: "despesa", valor: 357.21 },
  { mes: "Fevereiro", categoria: "Alimentação", tipo: "despesa", valor: 780 },
  { mes: "Fevereiro", categoria: "Farmácia", tipo: "despesa", valor: 116.77 },
  { mes: "Marco", categoria: "Salário", tipo: "receita", valor: 3500 },
  { mes: "Marco", categoria: "Aluguel", tipo: "despesa", valor: 648.64 },
  { mes: "Marco", categoria: "Conta de Luz", tipo: "despesa", valor: 71 },
  { mes: "Marco", categoria: "Conta de Água", tipo: "despesa", valor: 134.2 },
  { mes: "Marco", categoria: "Internet", tipo: "despesa", valor: 105.9 },
  { mes: "Marco", categoria: "Transporte", tipo: "despesa", valor: 450.35 },
  { mes: "Marco", categoria: "Lazer", tipo: "despesa", valor: 158 },
  { mes: "Marco", categoria: "Alimentação", tipo: "despesa", valor: 960 },
  { mes: "Abril", categoria: "Salário", tipo: "receita", valor: 3500 },
  { mes: "Abril", categoria: "Aluguel", tipo: "despesa", valor: 648.64 },
  { mes: "Abril", categoria: "Conta de Luz", tipo: "despesa", valor: 68 },
  { mes: "Abril", categoria: "Conta de Água", tipo: "despesa", valor: 115.2 },
  { mes: "Abril", categoria: "Internet", tipo: "despesa", valor: 105.9 },
  { mes: "Abril", categoria: "Transporte", tipo: "despesa", valor: 317.84 },
  { mes: "Abril", categoria: "Lazer", tipo: "despesa", valor: 97 },
  { mes: "Abril", categoria: "Alimentação", tipo: "despesa", valor: 990 },
];

//leio
app.get("/api/lancamentos", function (req, res) {
  res.json(lancamentos);
});

//escrevo
app.post("/api/lancamentos", function (req, res) {
  const lancamento = req.body;
  lancamentos.push(lancamento);
  res.end();
});

app.listen(3000);
