import {Injectable, model, signal} from '@angular/core';


interface ITarea {
  id: number,
  titulo: string,
  hecha: boolean,
}

@Injectable({
  providedIn: 'root',
})

export class TareaService {
  protected listaTareas = signal<ITarea[]>([
    {
      "id": 1,
      "titulo": "Comprar comida",
      "hecha": false,
    },
    {
      "id": 2,
      "titulo": "Terminar proyecto Angular",
      "hecha": false,
    },
    {
      "id": 3,
      "titulo": "Pagar cuentas",
      "hecha": true,
    },
    {
      "id": 4,
      "titulo": "Ir al gimnasio",
      "hecha": false,
    },
    {
      "id": 5,
      "titulo": "Estudiar para examen de Derecho",
      "hecha": false,
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
