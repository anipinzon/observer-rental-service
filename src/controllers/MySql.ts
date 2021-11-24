import { Observer } from "./interfaces";
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("books", "root", "pollo1107", {
  host: "localhost",
  dialect: "mysql",
});
export class MySql implements Observer {
  public  update(id: string): void {
    console.log(`SOY LA PERRA DE MYSQL Y TENGO EL ID ${id}`);

    this.connecion()
      .then(()=>{
        console.log("suuu")
      })
  }
   async connecion (){
     try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    }
  }
}
