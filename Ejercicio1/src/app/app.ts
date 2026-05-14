import {Component, inject, model, signal} from '@angular/core';
import {Tareas} from './tareas/tareas';


interface ITarea {
  id: number,
  titulo: string,
  hecha: boolean,
}

@Component({
  selector: 'app-root',
  imports: [
    Tareas
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {


}
