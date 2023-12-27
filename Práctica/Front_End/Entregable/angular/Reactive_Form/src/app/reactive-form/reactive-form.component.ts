  import { Component, EventEmitter, Output } from '@angular/core';
  import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
  import { UserI } from '../user';
  import { UserService } from '../user.service';

  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
  })
  export class ReactiveFormComponent {

    @Output() addUserEvent = new EventEmitter<UserI>();
    registrationForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
      this.registrationForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido:['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        emailCheck: ['', [Validators.required, this.validateEmailConfirmation]],
        tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        pw: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
        notificaciones: [false],
        terminos: [false, Validators.requiredTrue],
      });
    }

    onSubmit() {

      if (this.registrationForm.valid) {

        const newUser: UserI = {
          id: null,
          nombre: this.registrationForm.get('nombre')?.value as string,
          apellido: this.registrationForm.get('apellido')?.value as string,
          email: this.registrationForm.get('email')?.value as string,
          emailCheck: this.registrationForm.get('emailCheck')?.value as string,
          tel: this.registrationForm.get('tel')?.value as string,
          pw: this.registrationForm.get('pw')?.value as string,
          notificaciones: Boolean(this.registrationForm.get('notificaciones')?.value) ?? false,
          terminos: Boolean(this.registrationForm.get('terminos')?.value) ?? false,
        };

      this.userService.createUser(newUser).subscribe({
        next: (userWithId) => {
          this.addUserEvent.emit(userWithId);
          this.registrationForm.reset();
        },
        error: (error) => {
          console.error('Error al crear usuario:', error);
        },
      });
    } 
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
