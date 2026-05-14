import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {ListarTareas} from '../listar-tareas/listar-tareas';
import {FormsModule} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {TareaService} from '../tarea-service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-tareas',
  imports: [
    ListarTareas,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggle,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
  providers: [TareaService, provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Tareas {

  protected tareaService = inject(TareaService);


  // protected readonly title = signal('Ejercicio1');
  protected tituloTarea = model("");
  protected hechaTarea = model(false);
  protected prioridadTarea = model(2);
  protected fechaTarea = model(new Date());

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
      hecha: this.hechaTarea(),
      prioridad: this.prioridadTarea(),
      fechaVencimiento: this.fechaTarea()
    }
    // console.log(tarea)

    this.tareaService.nuevaTarea(tarea);
    this.tituloTarea.set("");
    this.hechaTarea.set(false);
    this.message.set("");
  }
}
