import { Component } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent {
  celdas: string[] = new Array(9).fill('');
  turno: string = 'X';

  celdaSeleccionada(indice: number): void {
    if (this.celdas[indice] === '') {
      this.celdas[indice] = this.obtenerJugadorActual();
      this.turno = this.turno === 'X' ? 'O' : 'X';
    }
  }

  private obtenerJugadorActual(): string {
    return this.turno;
  }
}
