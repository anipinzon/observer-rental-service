import  express , {Application} from "express";
import reservaRoutes from './routes/reserva'
class Server {
  private app: Application;
  private port: string;

  constructor(){
    this.app = express()
    this.port = process.env.PORT || '8080'
    this.routes()
  }
  routes(){
    this.app.use('/api/reseva' , reservaRoutes)
  }
  listen(){
    this.app.listen(this.port , ()=>{
      console.log(`Servicio corriendo en el puerto ${this.port}`)
    })
  }
}

export default Server