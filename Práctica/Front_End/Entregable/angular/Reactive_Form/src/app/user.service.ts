import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users/';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  get(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.usersUrl + id);
  }

  receiveFormData(formData: any) { 
    console.log('Datos del formulario recibidos:', formData);
  }
}
