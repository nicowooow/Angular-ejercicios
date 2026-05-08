import {Component, input, output, signal} from '@angular/core';

interface ITarea {
  id: number,
  titulo: string,
  hecha: boolean,
}


@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {


  protected idCha = output<number>();

  cambiarEstado(_id: number) {
    this.idCha.emit(_id);
  }

  protected idDel = output<number>();

  eliminar(_id: number) {
    this.idDel.emit(_id);
  }

  listaTareas = input.required<ITarea[]>();

  protected readonly console = console;
}
