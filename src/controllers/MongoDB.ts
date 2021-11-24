import { Observer} from "./interfaces";

export class MongoDB implements Observer {
  public update(id: string): void {
    console.log(`SOY LA PERRA DE MONGODB Y TENGO EL ID ${id}`);
  }
}