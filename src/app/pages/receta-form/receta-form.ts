import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { RecetaService, Receta } from '../../services/receta';

@Component({
  standalone: true,
  selector: 'app-receta-form',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './receta-form.html',
})
export class RecetaForm {
  receta: Receta = {
    nombre: '',
    ingredientes: '',
    preparacion: '',
    categoria: '',
    imagen_url: ''
  };

  constructor(
    private recetaService: RecetaService,
    private router: Router
  ) {}

  guardarReceta() {
  console.log(this.receta); // Ya lo vimos que imprime bien

  this.recetaService.createReceta(this.receta).subscribe({
    next: (res) => {
      console.log('Receta guardada', res);
      this.router.navigate(['/recetas']);
    },
    error: (err) => {
      console.error('Error al guardar receta', err);
    }
  });

  }
}
