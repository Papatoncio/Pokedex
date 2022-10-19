import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapsService } from '../../services/maps.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css'],
})
export class GeoComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(private mapsService: MapsService) { }

  get isUserLocationReady() {
    return this.mapsService.isUserLocationReady;
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      const map = new Map({
        container: this.mapDivElement.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: this.mapsService.useLocation, // starting position [lng, lat]
        zoom: 16, // starting zoom
      });
    }, 500);
  }
}
