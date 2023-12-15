import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  receiveFormData(formData: any) { 
    console.log('Datos del formulario recibidos:', formData);
  }
}
