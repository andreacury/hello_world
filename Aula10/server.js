const express = require("express");
const pgp = require("pg-promise");

const app = express();

app.use(express.json());
app.use("/", express.static("./client"));

const connection = pgp()("postgres://teste:teste@127.0.0.1:5432/postgres");

app.get("/api/lancamentos", async function (req, res) {
  let lancamentos = await connection.query(
    "select * from financas_pessoais.lancamento",
    []
  );
  lancamentos = lancamentos.map((lancamento) => {
    return {
      ...lancamento,
      valor: parseFloat(lancamento.valor),
    };
  });
  res.json(lancamentos);
});

app.post("/api/lancamentos", async function (req, res) {
  const lancamento = req.body;
  await connection.query(
    "insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ($1, $2, $3, $4)",
    [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]
  );
  res.end();
});

app.listen(3000);
