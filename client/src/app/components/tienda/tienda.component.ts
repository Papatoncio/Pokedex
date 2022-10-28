import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/Productos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  productsList: Productos[] = [];
  productObj: Productos = {
    id: '',
    nombre: '',
    modelo: '',
    precio: '',
  };
  id: string = '';
  nombre: string = '';
  modelo: string = '';
  precio: string = '';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.data.getAllProducts().subscribe(
      (res) => {
        this.productsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id();
          return data;
        });
      },
      (err) => {
        alert('Error Mientras Se Buscaban Productos');
      }
    );
  }

  resetForm() {
    this.id = '';
    this.nombre = '';
    this.modelo = '';
    this.precio = '';
  }

  addProduct() {
    if (this.nombre == '' || this.modelo == '' || this.precio == '') {
      alert('Rellene todos los campos correctamente');
      return;
    }

    this.productObj.id = '';
    this.productObj.nombre = this.nombre;
    this.productObj.modelo = this.modelo;
    this.productObj.precio = this.precio;

    this.data.addProduct(this.productObj);
    this.resetForm();
  }

  updateProduct() {}

  deleteProduct(product: Productos) {
    if (
      window.confirm(
        '¿Seguro que quieres eliminar este producto ' + product.nombre + '?'
      )
    ) {
      this.data.deleteProduct(product);
    }
  }
}
