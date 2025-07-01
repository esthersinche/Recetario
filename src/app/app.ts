import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'recetas-app';

  tema: 'light' | 'dark' = 'light';
  constructor(private renderer: Renderer2) { }

  toggleTheme() {
    this.tema = this.tema === 'light' ? 'dark' : 'light';
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.tema);
  }

}
