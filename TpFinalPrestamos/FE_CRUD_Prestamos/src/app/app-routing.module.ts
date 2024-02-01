import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'listPersonas', pathMatch: 'full' },
  { path: 'listPersonas', component: ListadoPersonaComponent },
  { path: 'agregarPersona', component: AgregarEditarPersonaComponent },
  { path: 'verPersona/:id', component: VerPersonaComponent },
  { path: 'editarPersona/:id', component: AgregarEditarPersonaComponent },
  { path: '**', redirectTo: 'listPersonas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
