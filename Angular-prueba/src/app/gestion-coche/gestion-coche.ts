import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCocheServicio } from '../gestion-coche-servicio';

@Component({
  selector: 'app-gestion-coche',
  imports: [FormsModule],
  templateUrl: './gestion-coche.html',
  styleUrl: './gestion-coche.css',
})
export class GestionCoche {
  // hacer DI
  // version recomendada por angular
  private gestionCocheServicio = inject(GestionCocheServicio);

  // esto se puede hacer tipo C#
  // constructor(private gestion: GestionCocheServicio) {}

  protected nuevaMarca = '';

  agregarCoche() {
    this.gestionCocheServicio.nuevaMarca(this.nuevaMarca);
  }
}
