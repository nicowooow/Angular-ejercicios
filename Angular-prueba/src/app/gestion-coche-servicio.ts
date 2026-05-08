import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionCocheServicio {
  protected coches = signal(['ford', 'audi', 'toyota']);

  public marcas = this.coches.asReadonly();

  public nuevaMarca(marca: string) {
    this.coches.update((lista) => [...lista, marca]);
  }
}
