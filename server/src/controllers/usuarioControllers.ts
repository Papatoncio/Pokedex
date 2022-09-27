import { Request, Response } from 'express';
import pool from "../database";

class UsuarioController{

    //CONSULTAR USUARIOS
    public async list(req: Request, resp: Response) {
        const usuarios = await pool.query('SELECT * FROM usuario');
        resp.json(usuarios);
    }

    //CONSULTAR USUARIO POR ID
    public async getOne(req: Request, resp: Response):Promise<any>{
        const {id} = req.params;
        const usuarios = await pool.query('SELECT * FROM usuario WHERE idusuario = ?',[id]);
        if(usuarios.length>0){
            return resp.json(usuarios[0]);
        }
        resp.status(404).json({text:'EL USUARIO NO EXISTE'});
    }

    //CREAR USUARIOS
    public async create (req: Request, resp: Response){
        await pool.query('INSERT INTO usuario set ?',[req.body]);
        resp.json({message:'CREANDO UN USUARIO'});
    }

    //BORRAR USUARIOS
    public async delete (req: Request, resp: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM usuario WHERE idusuario = ?',[id]);
        resp.json({message:'EL USUARIO SE HA ELIMINADO'});
    }

    //ACTUALIZAR USUARIOS
    public async update (req: Request, resp: Response):Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE usuario set ? WHERE idusuario = ?', [req.body, id]);
        resp.json({message:'SE ACTUALIZO EL USUARIO'});
    }
}

const usuarioController = new UsuarioController();
export default usuarioController;