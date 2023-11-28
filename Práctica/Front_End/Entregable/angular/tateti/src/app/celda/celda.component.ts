import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent {
  @Input() estado: string = '';
  @Output() celdaSeleccionada: EventEmitter<number> = new EventEmitter<number>(); 

  seleccionarCelda(): void {
    this.celdaSeleccionada.emit();
  }
}
