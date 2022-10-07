import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../maps/services/places.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
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

  constructor( private PlacesService: PlacesService, private http: HttpClient) { }

  ngOnInit() {
    //Utiliza el servicio places, para extraer los datos que recopilo Abstract API
    this.PlacesService.getLocation().subscribe(data => {
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
  }

}
