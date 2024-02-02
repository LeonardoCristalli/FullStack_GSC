import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder, 
    private _personaService: PersonaService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));    
  }

  ngOnInit(): void {
    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerPersona(this.id)
    } 
  }

  obtenerPersona(id: number) {
    this.loading = true;
    this._personaService.getPersona(id).subscribe(data => {
      this.form.setValue({
        nombre: data.Name,
        email: data.EmailAdress,
        telefono: data.PhoneNumber
      })
      this.loading = false;
    })
  }

  agregarEditarPersona() {

    const persona: Persona = {
      Name: this.form.value.nombre,
      EmailAdress: this.form.value.email,
      PhoneNumber: this.form.value.telefono,
    }  

    if (this.id != 0) {
      persona.Id = this.id;
      this.editarPersona(this.id, persona);
    } else {
      this.agregarPersona(persona);
    }
  }

  editarPersona(id: number, persona: Persona) {
    this.loading = true;
    this._personaService.updatePersona(id, persona).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizada');
      this.router.navigate(['/listPersonas']);
    })
  }

  agregarPersona(persona: Persona) {
      this._personaService.addPersona(persona).subscribe(data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listPersonas']);
    })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`La Persona fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
