import { Router } from "express";
import productsController from "../controllers/productsController";

class ProductsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    //Obtener Productos (METODO GET)
    this.router.get("/", productsController.list);
    //Obtener Productos por ID
    this.router.get("/:id", productsController.getOne);
    //Crear Productos (METODO POST)
    this.router.post("/", productsController.create);
    //Eliminar Productos (METODO DELETE)
    this.router.delete("/:id", productsController.delete);
    //Actualizar Productos (METODO PUT)
    this.router.put("/:id", productsController.update);
  }
}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;
