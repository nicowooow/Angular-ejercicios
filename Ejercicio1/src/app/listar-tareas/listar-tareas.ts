import {Component, input, output, signal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ToCammelCasePipe} from '../to-cammel-case-pipe';
import {ToDateFormatPipe} from '../to-date-format-pipe';
import {SortPriorityPipe} from '../sort-priority-pipe';


@Component({
  selector: 'app-listar-tareas',
  imports: [MatCardModule, MatButton, ToCammelCasePipe, ToDateFormatPipe, SortPriorityPipe],
  templateUrl: './listar-tareas.html',
  styleUrl: './listar-tareas.css',
})
export class ListarTareas {
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
