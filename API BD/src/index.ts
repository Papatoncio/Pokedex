import express, { Application } from "express";
import productsRoutes from "./routes/productsRoutes";
import morgan from "morgan";
import cors from "cors";

console.log("WORKS");
class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.set("port", process.env.PORT || 3100);
  }

  routes(): void {
    this.app.use("/api/products", productsRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Servidor en el puerto", this.app.get("port"));
    });
  }
}
const server = new Server();
server.start();
