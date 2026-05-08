import {Component, inject, model, signal} from '@angular/core';
import {Tareas} from './tareas/tareas';
import {FormsModule} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {TareaService} from './tarea-service';

interface ITarea {
  id: number,
  titulo: string,
  hecha: boolean,
}

@Component({
  selector: 'app-root',
  imports: [Tareas,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggle,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [TareaService]
})

export class App {
  protected tareaService = inject(TareaService);


  // protected readonly title = signal('Ejercicio1');
  protected tituloTarea = model("");
  protected hechaTarea = model(false);
  protected message = signal("");
  protected tareas = this.tareaService.tareas;

  eliminarTarea(_id: number) {
    this.tareaService.EliminarTarea(_id);
  }

  cambiarEstado(_id: number) {
    this.tareaService.estadoTarea(_id);
  }

  crearTareas() {

    if (this.tituloTarea().trim() === null || this.tituloTarea().trim() === "") {
      this.message.update(m => "tienes que llenar el titulo")
      return;
    }
    var ultimoid = this.tareaService.ultimaTarea();

    const tarea: ITarea = {
      id: (ultimoid?.id ?? 0) + 1,
      titulo: this.tituloTarea(),
      hecha: this.hechaTarea()
    }
    // console.log(tarea)

    this.tareaService.nuevaTarea(tarea);
    this.tituloTarea.set("");
    this.hechaTarea.set(false);
    this.message.set("");
  }

}
