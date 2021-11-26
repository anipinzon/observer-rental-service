import { Request, Response } from "express";
import { Subject, Observer } from "./interfaces";
import { MongoDB } from "./MongoDB";
import { MySql } from "./MySql";

class reservaPublisher implements Subject {
  private observers: Observer[] = [];
  private id: string;
  constructor(ids: string) {
    this.id = ids;
  }

  public agregar(observer: Observer): void {
    this.observers.push(observer);
  }

  public eliminar(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  public notificar(): void {
    console.log("notificando a mis suscriptores")
    for (const observer of this.observers) {
      observer.update(this.id);
    }
  }
}

export const updateReserva = (req: Request, res: Response) => {
  // Sacar el id de la peticion
  const { id } = req.params;
  // Observer y mandarle el id
  const subject = new reservaPublisher(id);

  // Instancia mySql
  const mySql = new MySql();
  // Suscribo mysql a el observer
  subject.agregar(mySql);

  // El observer notifica

  // Instancia mongo
  const mongoDB = new MongoDB();
  // Suscribo mongo a el observer
  subject.agregar(mongoDB);

  // El observer notifica
  subject.notificar();

  // Respondo la peticion
  res.send('Dato actualizado')
};
