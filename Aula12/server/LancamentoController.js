class LancamentoController {
  constructor(httpServer, lancamentoData) {
    httpServer.register(
      "get",
      "/api/lancamentos",
      async function (params, body) {
        let lancamentos = await lancamentoData.getLancamentos();
        lancamentos = lancamentos.map((lancamento) => {
          return {
            ...lancamento,
            valor: parseFloat(lancamento.valor),
          };
        });
        return lancamentos;
      }
    );

    httpServer.register(
      "post",
      "/api/lancamentos",
      async function (params, body) {
        const lancamento = body;
        await lancamentoData.saveLancamento(lancamento);
      }
    );

    httpServer.register(
      "delete",
      "/api/lancamentos/:idLancamento",
      async function (params, body) {
        const idLancamento = params.idLancamento;
        await lancamentoData.deleteLancamento(idLancamento);
      }
    );
  }
}

module.exports = LancamentoController;
