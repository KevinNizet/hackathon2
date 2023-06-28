const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} 
      (login, mdp) values (?, ?)`,
      [user.login, user.mdp]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set login = ? where mdp = ?`,
      [user.title, user.id]
    );
  }

  getUserByLogin(data) {
    return this.database.query(`select * from user where login = ?`, [
      data.login,
    ]);
  }
}
module.exports = UserManager;
