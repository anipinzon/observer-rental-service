export interface Subject {
  agregar(observer: Observer): void;
  eliminar(observer: Observer): void;
  notificar(): void;
}
export interface Observer {
  update(id:string): void;
}