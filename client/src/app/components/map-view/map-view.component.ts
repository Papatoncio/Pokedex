import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(private mapsServices: MapsService) { }

  ngAfterViewInit(): void {
    if(!this.mapsServices.useLocation) throw Error('No hay MapsServices.UserLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.mapsServices.useLocation, // starting position [lng, lat]
      zoom: 16, // starting zoom
      });

      const popup = new Popup()
        .setHTML(`
        <h6 style="color: black;">Aqui Estoy</h6>
        <span style="color: black;">Estoy en este lugar del mundo</span>
        `);

      new Marker({ color: 'black' })
        .setLngLat( this.mapsServices.useLocation )
        .setPopup( popup )
        .addTo( map );

        const popupR = new Popup()
        .setHTML(`
        <h6 style="color: black;">Gimnasio Rojo</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

      new Marker({ color: 'red' })
        .setLngLat( [-100.93338048936494, 21.164661448758253] )
        .setPopup( popupR )
        .addTo( map );

        const popupB = new Popup()
        .setHTML(`
        <h6 style="color: black;">Gimnasio Azul</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

      new Marker({ color: 'blue' })
        .setLngLat( [-100.93475606406156, 21.167776824545204] )
        .setPopup( popupB )
        .addTo( map );

        const popupG = new Popup()
        .setHTML(`
        <h6 style="color: black;">Gimnasio Verde</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

        new Marker({ color: 'green' })
        .setLngLat( [-100.93147344107958, 21.16714054603237] )
        .setPopup( popupG )
        .addTo( map );

        const popupA = new Popup()
        .setHTML(`
        <h6 style="color: black;">Gimnasio Amarillo</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

      new Marker({ color: 'yellow' })
        .setLngLat( [-100.9336587190047, 21.165674056147658] )
        .setPopup( popupA )
        .addTo( map );

        const popupE = new Popup()
        .setHTML(`
        <h6 style="color: black;">Aqui vivo</h6>
        <span style="color: black;">Easter Egg de mi casita</span>
        `);

      new Marker({ color: 'brown' })
        .setLngLat( [-100.873987926447318, 21.466078731698133] )
        .setPopup( popupE )
        .addTo( map );
  }

}
