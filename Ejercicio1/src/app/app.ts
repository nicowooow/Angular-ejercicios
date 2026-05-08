import {Component, input, signal} from '@angular/core';
import {Tareas} from './tareas/tareas';
import {FormsModule} from '@angular/forms';
import {chai} from 'vitest';

interface ITarea {
  id: number,
  titulo: string,
  hecha: boolean,
}

@Component({
  selector: 'app-root',
  imports: [Tareas, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {


  protected readonly tareas = signal<ITarea[]>([
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

  // protected readonly title = signal('Ejercicio1');
  protected tituloTarea = signal("");
  protected hechaTarea = signal(0);
  protected message = signal("");

  crearTareas() {
    // console.log(this.tituloTarea());
    // console.log(this.hechaTarea());

    // creamos una nueva tarea, con la cual se actualiza en la lista y en el html lo enviamos de esta manera
    // <app-tareas [listaTareas]="tareas()"></app-tareas>
    // donde [listaTareas] es el nombre de la variable que está esperando los datos en dicho componente

    if(this.tituloTarea().trim() === null || this.tituloTarea().trim() === "" ) {
      this.message.update(m=> "tienes que llenar el titulo")
      return;
    }

    const tarea: ITarea = {
      id: this.tareas().length + 1,
      titulo: this.tituloTarea(),
      hecha: this.hechaTarea() == 1
    }
    // console.log(tarea)

    this.tareas.update(lista => [...lista, tarea]);
    this.tituloTarea.update(v => "");
    this.hechaTarea.update(v => 0);
    this.message.update(m=>"");
  }

  eliminar(_id: number) {
    this.tareas.update(lista => lista.filter(l => l.id !== _id));
  }

  cambiar(_id: number) {
    this.tareas.update(lista => lista.map(t => t.id == _id ? {...t, hecha: !t.hecha} : t));
  }

}
