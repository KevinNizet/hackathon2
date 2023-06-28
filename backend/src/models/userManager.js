const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getUserByLogin(data) {
    return this.database.query(`select * from user where login = ?`, [
      data.login,
    ]);
  }
}

module.exports = userManager;
