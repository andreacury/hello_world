const pgp = require("pg-promise");

class Connection {
  constructor() {
    this.connection = pgp()("postgres://teste:teste@127.0.0.1:5432/postgres");
  }

  query(statement, params) {
    return this.connection.query(statement, params);
  }
}

module.exports = Connection;
