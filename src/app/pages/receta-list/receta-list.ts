import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaService, Receta } from '../../services/receta';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-receta-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './receta-list.html',
  styleUrl: './receta-list.css'
})
export class RecetaList {
    recetas: Receta[] = [];

  constructor(private recetaService: RecetaService) {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.recetaService.getRecetas().subscribe((data) => {
      this.recetas = data;
    });
  }

  eliminarReceta(id: number) {
    this.recetaService.deleteReceta(id).subscribe(() => {
      this.obtenerRecetas(); // recarga lista
    });
  }
}
