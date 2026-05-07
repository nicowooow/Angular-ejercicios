import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-coche',
  imports: [FormsModule],
  templateUrl: './gestion-coche.html',
  styleUrl: './gestion-coche.css',
})
export class GestionCoche {
  protected readonly coches = signal(['ford', 'audi', 'toyota']);

  protected nuevaMarca = '';

  agregarCoche() {
    this.coches.update((cochesAntes) => [...cochesAntes, this.nuevaMarca]);
    this.nuevaMarca = '';
  }
}
