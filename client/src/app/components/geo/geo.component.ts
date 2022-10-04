import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../maps/services/places.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

  constructor( private PlacesService: PlacesService) { }

  ngOnInit(): void {
  }

}
