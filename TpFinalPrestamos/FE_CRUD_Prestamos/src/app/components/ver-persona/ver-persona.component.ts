import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../../interfaces/persona';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrl: './ver-persona.component.css'
})
export class VerPersonaComponent implements OnInit {

  id: number;
  persona!: Persona;

  constructor(private _personaService: PersonaService,
      private aRoute: ActivatedRoute) {
        this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    this.obtenerPersona();
  }

obtenerPersona() {
    this._personaService.getPersona(this.id).subscribe(data => {
      this.persona = data;
      console.log('Datos asignados a persona:', this.persona);
    });
  }
}
