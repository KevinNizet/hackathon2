const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  getUserByEmail(data) {
    return this.database.query(`select * from users where email = ?`, [
      data.email,
    ]);
  }
}

module.exports = userManager;
