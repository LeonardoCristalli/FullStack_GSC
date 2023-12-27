import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  createDb() {

    return {
      users: [
        { 
          id: 1, 
          nombre: 'Leonardo', 
          apellido: 'Mate', 
          email: 'lamerced@gmail.com', 
          emailCheck: 'lamerced@gmail.com', 
          num: 12345678, 
          pw: 'playadito', 
          notificaciones: false, 
          terminos: true
        },

        {
          id: 2,
          nombre: 'Mike', 
          apellido: 'Messi',
          email: 'mikemessi@gmail.com',
          emailCheck: 'mikemessi@gmail.com',
          num: 999999999,
          pw: 'dimaria',
          notificaciones: true,
          terminos: true
        },
      ]
    };
  }

}
