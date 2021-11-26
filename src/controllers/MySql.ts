import { Observer } from "./interfaces";
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_BD,
  process.env.MYSQL_USUARIO,
  process.env.MYSQL_CONTRASEÑA,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    port: "3306",
    connectionLimit: 10,
  }
);
export class MySql implements Observer {
  public update(id: string): void {
    console.log(`SOY MY SQL Y TENGO EL ID ${id}`);
    this.connecion();
  }
  async connecion() {
    try {
      await sequelize.authenticate();
      console.log("SUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
    } catch (e) {
      console.log(e);
    }
  }
}
