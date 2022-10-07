import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: number;
  longitude: number;
  country_name:string;
  region_name:string;
  city:string,
  continent_name:string,
  zip: number,
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number] | undefined;

  //VERIFICA QUE EL NAVEGADOR SEA COMPATIBLE CON LA GEOLOCALIZACION
  get isUserLocationReady(): boolean{
    return !!this.useLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
   }

  //OBTIENE LATITUD Y LONGITUD DE USUARIO
  getUserLocation():Promise<[number, number]>{
    return new Promise((resolve, rejects) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords}) =>{
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) =>{
          alert('No se pudo obtener la Geolocalizacion');
          console.log(err);
          rejects();
        }
      );
    })
  }

  getLocation(){
    return this.http.get<Location>('https://ipgeolocation.abstractapi.com/v1/?api_key=ad87c2843ea242eb8213b17393d17974');
  }

}
