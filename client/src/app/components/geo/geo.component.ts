import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Map } from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements AfterViewInit {
  //Variables
  lat: number;
  lng: number;
  country: string;
  city: string;
  continent: string;
  region: string;
  cp: string;
  security: boolean;
  ip: string;
  time: string;
  flag: string;
  isp: string;

  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor( private placesService: PlacesService, private http: HttpClient) { }

  get isUserLocationRedy(){
    return this.placesService.isUserLocationReady;
  }

  ngAfterViewInit(): void {
    //Utiliza el servicio places, para extraer los datos que recopilo Abstract API
    this.placesService.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country;
      this.city = data.city;
      this.region = data.region;
      this.continent = data.continent;
      this.cp = data.postal_code;
      this.ip = data.ip_address;
      this.security = data.security.is_vpn;
      this.time = data.timezone.current_time;
      this.flag = data.flag.png;
      this.isp = data.connection.isp_name;
    });
    //Mapa de Geolocalizacion
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation,// starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    console.log(this.placesService.isUserLocationReady)
  }

}
