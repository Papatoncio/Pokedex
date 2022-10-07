import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Modelo de los resultados que nos regresa la Abstract API
interface LocationInfo {
  ip_address: string
  city: string
  region: string
  postal_code: string
  country: string
  continent: string
  longitude: number
  latitude: number
  security: {
    is_vpn: false
  }
  timezone: {
    name: string,
    current_time: string,
  }
  flag: {
    png: string
  }
  currency: {
    currency_name: string
  }
  connection: {
    autonomous_system_organization: string
    connection_type: string
    isp_name: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number] | undefined;

  constructor(private http: HttpClient) { }

  //OBTENEMOS DATOS DE ABSTRACT API
  getLocation(){
    return this.http.get<LocationInfo>('https://ipgeolocation.abstractapi.com/v1/?api_key=ad87c2843ea242eb8213b17393d17974');
  }

}
