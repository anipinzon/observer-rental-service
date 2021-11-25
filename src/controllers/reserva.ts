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
  const { id } = req.params;
  const subject = new reservaPublisher(id);

  const mySql = new MySql();
  subject.agregar(mySql);

  subject.notificar();

  const mongoDB = new MongoDB();
  subject.agregar(mongoDB);

  subject.notificar();

  res.send('Dato actualizado')
};
