const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getUserByLogin(data) {
    return this.database.query(`SELECT * FROM user WHERE login = ?`, [
      data.login,
    ]);
  }
}

module.exports = userManager;
