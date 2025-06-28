import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { RecetaService, Receta } from '../../services/receta';

@Component({
  standalone: true,
  selector: 'app-receta-form',
  imports: [CommonModule, FormsModule],
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
    console.log(this.receta);
    this.recetaService.createReceta(this.receta).subscribe(() => {
      // Cuando guarde, vuelve a la lista
      this.router.navigate(['/recetas']);
    });
  }
}
