import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required], 
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      contraseña: ['', Validators.required],
      recibirNotificaciones: [false],
      aceptarTerminos: [false, Validators.requiredTrue],
    }, {validator: this.checkEmailsMatch}); 
  }

   checkEmailsMatch(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmarEmail = group.get('confirmarEmail')?.value;

    return email === confirmarEmail ? null : { notMatching: true };
  }
  
  onSubmit(): void {
    if (this.formulario.valid) {
      console.log(this.formulario.value); 
    } else {
      Object.keys(this.formulario.controls).forEach(controlName => {
        const control = this.formulario.get(controlName);
        control?.markAsTouched();
        if (control?.errors) {
          console.error(`Error en el control ${controlName}:`, control.errors )
        }
      });
    }
  } 
}