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

      new Marker({ color: 'red' })
        .setLngLat( this.mapsServices.useLocation )
        .setPopup( popup )
        .addTo( map );

  }

}
