import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Tareas} from './tareas/tareas';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tareas,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Ejercicio1');
  protected tituloTarea = "";
  CrearTarea(){

  }
}
