import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserI } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  @Input() getMaxId!: () => number;
  @Output() addUserEvent = new EventEmitter<UserI>();

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    emailCheck: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    pw: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
    notificaciones: [false],
    terminos: [false, Validators.required],
  });

  onSubmit() {
    const telValue = this.registrationForm.get('tel')?.value;
    
    const newUser: UserI = {
      id: this.getMaxId() + 1,
      nombre: this.registrationForm.get('nombre')?.value as string,
      apellido: this.registrationForm.get('apellido')?.value as string,
      email: this.registrationForm.get('email')?.value as string,
      emailCheck: this.registrationForm.get('emailCheck')?.value as string,
      tel: telValue ? parseInt(telValue, 10) : 0,
      pw: this.registrationForm.get('pw')?.value as string,
      notificaciones: this.registrationForm.get('notificaciones')?.value ?? false,
      terminos: true,
    }

    this.addUserEvent.emit(newUser);
    this.registrationForm.reset();
  }

  limpiar() {
    this.registrationForm.reset();  
  }

  validateEmailConfirmation(control: AbstractControl): { [key: string]: boolean } | null {
    const formGroup = control.parent as FormGroup;
    if (!formGroup) {
      return null;
    }

  const emailControl = formGroup.get('email');
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
