import { Observer } from "./interfaces";
const db = require("mongoose");

let MONGODB_STRING_CONECTION = process.env.MONGODB_STRING_CONECTION || "mongodb://root:example@mongodb:27017/admin"

export class MongoDB implements Observer {
  public update(id: string): void {
    console.log(`SOY MONGODB Y TENGO EL ID ${id}`);
    db.Promise = global.Promise;
    db.connect(
      MONGODB_STRING_CONECTION
    );
    
  }
}
