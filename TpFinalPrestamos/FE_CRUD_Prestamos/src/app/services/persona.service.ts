import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/persons/';

  private handleError(error: any) {
    console.error('Error en el servicio:', error);
    return throwError(error);
  }

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.myAppUrl}${this.myApiUrl}${id}`).pipe(
      tap(data => console.log('Datos del servidor:', data))
    );
  }

  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.myAppUrl}${this.myApiUrl}`, persona);
  }

  updatePersona(id: number, persona: Persona): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, persona);
  }
}
