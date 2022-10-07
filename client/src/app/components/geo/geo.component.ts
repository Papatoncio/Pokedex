import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../maps/services/places.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  lat: number;
  lng: number;
  country: string = '';
  city: string = '';
  continent: string = '';
  region: string = '';
  cp: number = 0;

  constructor( private PlacesService: PlacesService, private http: HttpClient) { }

  ngOnInit() {
    this.PlacesService.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.city = data.city;
      this.region = data.region_name;
      this.continent = data.continent_name;
      this.cp = data.zip;
    })
  }

}
