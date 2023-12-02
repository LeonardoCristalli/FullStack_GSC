import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  
  myForm: FormGroup;
  formSubmitted = false; 

  constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]], 
        apellido: ['', [Validators.required]], 
        email: ['', [Validators.required, Validators.email]],
        confirmarEmail: ['', [Validators.required, this.validateEmailConfirmation.bind(this)]],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
        recibirNotificaciones: [false],
        aceptarTerminos: [false]
      }); 

      this.myForm.valueChanges.subscribe(console.log)
    }
    
    onSubmit() {
      this.formSubmitted = true;
      this.myForm.markAllAsTouched();

      if (!this.myForm.get('aceptarTerminos').value) {
        this.myForm.get('aceptarTerminos').setErrors({ 'requiredTrue': true });
      }

      if (this.myForm.valid) {
        console.log('Formulario enviado', this.myForm.value);
      }
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

    validateEmailConfirmation(control: AbstractControl): { [key: string]: boolean } | null { 
      const emailControl = control.root.get('email');

      if (!emailControl) {
        return null;
      }

      const email = emailControl.value;
      const confirmarEmail = control.value;

      if (email !== confirmarEmail) {
        return { 'emailNoCoincide': true };
      }

      return null;
    }

}