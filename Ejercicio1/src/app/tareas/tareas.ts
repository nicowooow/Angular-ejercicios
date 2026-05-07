import {Component, signal} from '@angular/core';

interface ITarea {
  id: number,
  titulo: string,
  completada: boolean,
}

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  protected readonly tareas = signal<ITarea[]>([
    {
      "id": 1,
      "titulo": "Comprar comida",
      "completada": false,
    },
    {
      "id": 2,
      "titulo": "Terminar proyecto Angular",
      "completada": false,
    },
    {
      "id": 3,
      "titulo": "Pagar cuentas",
      "completada": true,
    },
    {
      "id": 4,
      "titulo": "Ir al gimnasio",
      "completada": false,
    },
    {
      "id": 5,
      "titulo": "Estudiar para examen de Derecho",
      "completada": false,
    }
  ]);

}
