import { Observer } from "./interfaces";
const { Sequelize } = require("sequelize");


// const sequelize = new Sequelize(mySql.db, mySql.usuario, mySql.contraseña, {
//   host: mySql.host,
//   dialect: "mysql",
//   port: "3306",
//   connectionLimit: 10,
// });
export class MySql implements Observer {
  public  update(id: string): void {
    console.log(`SOY  MY SQL Y TENGO EL ID ${id}`);
  }
  //  async connecion (){
    
  //     await sequelize.authenticate();
  //     const users = await sequelize.query("SELECT * FROM `users`");
  //     console.log(users);
    
  // }
}
