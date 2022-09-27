import { response, Router } from "express";
import usuarioController from "../controllers/usuarioControllers";

class UsuarioRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //Obtener Usuarios (METODO GET)
        this.router.get('/', usuarioController.list);
        //Obtener Usuario por ID
        this.router.get('/:id', usuarioController.getOne);
        //Crear Usuarios (METODO POST)
        this.router.post('/', usuarioController.create);
        //Eliminar Usuarios (METODO DELETE)
        this.router.delete('/:id', usuarioController.delete);
        //Actualizar Usuarios (METODO PUT)
        this.router.put('/:id',usuarioController.update);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;