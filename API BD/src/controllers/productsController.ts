import { Request, Response } from "express";
import pool from "../database";

class ProductsController {
  //Metodo para listar productos
  public async list(req: Request, resp: Response) {
    const product = await pool.query("SELECT * from producto");
    resp.json(product);
  }

  //Metodo para listar un solo producto
  public async getOne(req: Request, resp: Response): Promise<any> {
    const { id } = req.params; // se recupera el id de request params.
    const products = await pool.query(
      "SELECT * FROM producto WHERE idproducto = ?",
      [id]
    );
    if (products.length > 0) {
      return resp.json(products[0]);
    }
    resp.status(404).json({ text: "El producto no existe" });
  }

  //Metodo para agregar un producto
  public async create(req: Request, resp: Response): Promise<void> {
    await pool.query("INSERT INTO producto set ?", [req.body]);
    resp.json({ text: "Producto Agregado" });
  }

  //Metodo para eliminar un producto
  public async delete(req: Request, resp: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM producto WHERE idproducto = ?", [id]);
    resp.json({ text: "El producto ha sido borrado" });
  }

  //Metodo para actualizar un producto
  public async update(req: Request, resp: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("UPDATE producto set ? WHERE idproducto = ?", [
      req.body,
      id,
    ]);
    resp.json({ text: "Producto Actualizado" });
  }
}

const productsController = new ProductsController();
export default productsController;
