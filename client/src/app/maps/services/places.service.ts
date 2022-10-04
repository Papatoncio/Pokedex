import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number] | undefined;

  //VERIFICA QUE EL NAVEGADOR SEA COMPATIBLE CON LA GEOLOCALIZACION
  get isUserLocationReady(): boolean{
    return !!this.useLocation;
  }

  constructor() {
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

}
