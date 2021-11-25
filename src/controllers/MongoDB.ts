import { Observer } from "./interfaces";
// const db = require("mongoose");
// db.Promise = global.Promise;
// db.connect(
//   `mongodb://${process.env.MONGO_USUARIO}:${process.env.MONGO_CONTRASEÑA}@${process.env.MONGO_HOST}/${process.env.MONGO_TABLE}`
// );

export class MongoDB implements Observer {
  public update(id: string): void {
    console.log(`SOY MONGODB Y TENGO EL ID ${id}`);
  }
}
