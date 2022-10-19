import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public useLocation?: [number, number];

  get isUserLocationReady(): boolean{
    return !!this.useLocation
  }

  constructor() {
    this.getUserLocation();
  }

  getUserLocation(): Promise<[number, number]>{
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation =[coords.longitude, coords.latitude]
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );
    });
  }
}
