import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// definición del componente usando el @component
@Component({
  selector: 'app-root', // como se llamara la etiqueta o componente a utilizar
  imports: [RouterOutlet, FormsModule], // qué otros componentes o apartados tienen que importar
  templateUrl: './app.html', // plantilla que utilizara en un fichero html externo
  styleUrl: './app.css', // estilos que utilizara en un fichero css externo
})
export class App {
  // esta es una variable que se usara en la plantilla de html referenciada
  // al usar signal hace que la variable sea más sensible a los cambios que se realizaran
  protected readonly title = signal("I'm nicolas");
  // en el html los que tienen signal se llaman por "nombre()"

  protected readonly role = signal(false);

  protected contador = signal(0);

  aumentarContador(){
    // como en angular no se puede modificar los valores de forma directa se hace mediante una
    // método ya definido "update()", recibiendo como parametro de entrada un lambda
    this.contador.update(c=> c + 1)
  };

  protected readonly coches = signal(['ford', 'audi', 'toyota']);

  protected nuevaMarca = "";

  agregarCoche(){
    this.coches.update( cochesAntes=> [...cochesAntes, this.nuevaMarca]);
    this.nuevaMarca = "";
  }
}
