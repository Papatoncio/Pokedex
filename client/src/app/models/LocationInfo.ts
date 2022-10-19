//Modelo de los resultados que nos devuelve la Abstract API
export interface LocationInfo {
  ip_address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  continent: string;
  longitude: number;
  latitude: number;
  security: {
    is_vpn: false;
  };
  timezone: {
    name: string;
    current_time: string;
  };
  flag: {
    png: string;
  };
  currency: {
    currency_code: string;
    currency_name: string;
  };
  connection: {
    autonomous_system_organization: string;
    connection_type: string;
    isp_name: string;
  };
}
