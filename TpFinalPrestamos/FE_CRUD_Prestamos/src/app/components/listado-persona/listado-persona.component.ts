import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrl: './listado-persona.component.css'
})
export class ListadoPersonaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'prestamos', 'acciones'];
  dataSource = new MatTableDataSource<Persona>();
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, 
            private _personaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerPersonas() {
    
    this.loading = true;
    this._personaService.getPersonas().subscribe({
      next: (data) => {
        this.loading = false;
        this.dataSource.data = data;
      },
      error: (e) => {
        this.loading = false;
        alert('Oppss ocurrió un error');
      },
      complete: () => console.info('complete')
    })
  }

  eliminarPersona(id: number) {
    this.loading = true;

    this._personaService.deletePersona(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerPersonas();
    });
  }

  mensajeExito() {
    this._snackBar.open('La Persona fue eliminada con exito', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
  
}
