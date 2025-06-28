import { Routes } from '@angular/router';
import { RecetaForm } from './pages/receta-form/receta-form';
import { RecetaList } from './pages/receta-list/receta-list';
import { RecetaDetalle } from './pages/receta-detalle/receta-detalle';


export const routes: Routes = [
  { path: '', redirectTo: '/recetas', pathMatch: 'full' },
  { path: 'recetas', component: RecetaList },
  { path: 'recetas/nueva', component: RecetaForm },
  { path: 'recetas/:id', component: RecetaDetalle }
];
