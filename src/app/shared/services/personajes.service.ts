import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonasRespose } from './models/PersonajesResponse';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  
  //inyeccion de independencia
  constructor(private http:HttpClient) { }


//Un metodo es observable cuando es acincronico
  getPersonajes():Observable<PersonasRespose>{

    return this.http.get<PersonasRespose>("https://rickandmortyapi.com/api/character")


  }
}
