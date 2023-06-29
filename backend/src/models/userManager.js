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

  insert(user) {
    // const {ref_archives, titre, auteur, img, date_creation, format, technique, lien_page_auteur, lien_article, categorie, details, resume} = req.body;
    return this.database.query(
      `insert into ${this.table} 
      (login, mdp) values (?, ?)`,
      [user.login, user.mdp]
    );
  }
}

module.exports = userManager;
