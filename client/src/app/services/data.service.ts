import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  // Agregar un producto
  addProduct(producto: Productos) {
    producto.id = this.afs.createId();
    return this.afs.collection('/Productos').add(producto);
  }

  // Obtener todos los productos
  getAllProducts() {
    return this.afs.collection('/Productos').snapshotChanges();
  }

  //Borrar un Producto
  deleteProduct(producto: Productos) {
    return this.afs.doc('/Productos/' + producto.id).delete();
  }

  //Actualizar un Producto
  updateProduct(producto: Productos) {
    this.deleteProduct(producto);
    this.addProduct(producto);
  }
}
