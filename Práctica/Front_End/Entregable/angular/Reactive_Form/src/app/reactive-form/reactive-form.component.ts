import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder) {}

  registracionForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido:['', Validators.required],
    email: ['', Validators.required],
    emailCheck: ['', Validators.required],
    tel: ['', Validators.required],
    pw: ['', Validators.required],
    notificaciones: [''],
    terminos: ['', Validators.required],
  });

  enviar(){
    console.log(this.registracionForm.value);
  }

  limpiar(){
    this.registracionForm.reset();  
  }

}
