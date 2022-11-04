import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: any[];

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.tiendaService.getProductos().subscribe(
      resp => {
      this.productos = resp;
      },
      err => console.error(err)
      );
  }

}
