import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]], 
        apellido: ['', [Validators.required]], 
        email: ['', [Validators.required, Validators.email]],
        confirmarEmail: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(a-zA-ZO-9]+)$')]],
        recibirNotificaciones: [false],
        aceptarTerminos: [false, [Validators.requiredTrue]]
      }); 

      this.myForm.valueChanges.subscribe(console.log)
    }
    
    onSubmit() {
      console.log('Formulario enviado', this.myForm.value);
    }

    get nombre() {
        return this.myForm.get('nombre');
    }

    get apellido() {
        return this.myForm.get('apellido');
    }
    
    get email() {
      return this.myForm.get('email');
    }

    get confirmarEmail() {
      return this.myForm.get('confirmarEmail');
    }

    get telefono() {
      return this.myForm.get('telefono');
    }

    get password() {
      return this.myForm.get('password');
    }

    get recibirNotificaciones() {
      return this.myForm.get('recibirNotificaciones');
    }

    get aceptarTerminos() {
      return this.myForm.get('aceptarTerminos');
    }

    validateEmailConfirmation(control: AbstractControl): { [key:string]: boolean} | null {
      const email = this.myForm.get('email').value;
      const confirmarEmail = control.value

      if (email !== confirmarEmail) {
        return { 'emailNoCoincide': false };
      }

      return null;
    }
}