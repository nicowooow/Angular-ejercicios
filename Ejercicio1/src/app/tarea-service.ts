import {Injectable, model, signal} from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class TareaService {
  protected listaTareas = signal<ITarea[]>([
    {
      "id": 1,
      "titulo": "Comprar comida",
      "hecha": false,
      "prioridad": 1,
      "fechaVencimiento": new Date("2026-05-16")
    },
    {
      "id": 2,
      "titulo": "Terminar proyecto Angular",
      "hecha": false,
      "prioridad": 2,
      "fechaVencimiento": new Date("2026-05-20")
    },
    {
      "id": 3,
      "titulo": "Pagar cuentas",
      "hecha": true,
      "prioridad": 2,
      "fechaVencimiento": new Date("2026-05-15")
    },
    {
      "id": 4,
      "titulo": "Ir al gimnasio",
      "hecha": false,
      "prioridad": 0,
      "fechaVencimiento": new Date("2026-05-14")
    },
    {
      "id": 5,
      "titulo": "Estudiar para examen de Derecho",
      "hecha": false,
      "prioridad": 2,
      "fechaVencimiento": new Date("2026-05-18")
    }
  ]);
  public tareas = this.listaTareas.asReadonly();

  public nuevaTarea(tarea: ITarea) {
    this.listaTareas.update(lista => [...lista, tarea]);
  }

  public EliminarTarea(_id: number) {
    this.listaTareas.update(lista => lista.filter(l => l.id !== _id));
  }

  public estadoTarea(_id: number) {
    this.listaTareas.update(lista => lista.map(t => t.id == _id ? {...t, hecha: !t.hecha} : t));
  }

  public ultimaTarea() {
    return this.tareas().at(-1);
  }
}
