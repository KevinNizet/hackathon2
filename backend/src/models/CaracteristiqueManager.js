const AbstractManager = require("./AbstractManager");

class CaracteristiqueManager extends AbstractManager {
  constructor() {
    super({ table: "Caracteristique" });
  }
}

module.exports = CaracteristiqueManager;
