import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private mapsService: MapsService) { }

  get isUserLocationReady(){
    return this.mapsService.isUserLocationReady;
  }
}
