import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { RecetaService, Receta } from '../../services/receta';

@Component({
  standalone: true,
  selector: 'app-receta-detalle',
  imports: [CommonModule, RouterModule ],
  templateUrl: './receta-detalle.html',
})
export class RecetaDetalle {
  receta: Receta | null = null;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recetaService.getRecetaById(id).subscribe((data) => {
      this.receta = data;
      console.log('Receta cargada:', this.receta);
    });
  }
}
