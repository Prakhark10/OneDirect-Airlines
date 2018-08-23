import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions =
{
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http:HttpClient) { }

  getAirlines()
  {
  	return this.http.get('/server/api/v1/airlines');
  }

  getAirline(id: number)
  {
  	return this.http.get('/server/api/v1/airlines/'+id);
  }

  createAirlineRegistration(airline)
  {
  	let body = JSON.stringify(airline);
	return this.http.post('server/api/v1/bikes',body,httpOptions); 
  }

}
