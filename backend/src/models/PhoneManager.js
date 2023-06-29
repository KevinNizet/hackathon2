const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} 
      (name_phone, marque, image) values (?, ?, ?)`,
      [phone.name_phone, phone.marque, phone.image]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set name_phone = ?, marque = ?, image = ? where id = ?`,
      [phone.name_phone, phone.marque, phone.image, phone.id]
    );
  }
}

module.exports = PhoneManager;
