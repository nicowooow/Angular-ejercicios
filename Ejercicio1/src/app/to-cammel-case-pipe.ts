import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toCammelCase',
})
export class ToCammelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '';

    // Convertimos todo a minúsculas y separamos por espacios
    const palabras = value.toLowerCase().trim().split(/\s+/);

    return palabras.reduce((acumulador, palabra, indice) => {
      // La primera palabra queda igual, las demás con la primera letra en mayúscula
      const formateada = indice === 0
        ? palabra
        : palabra.charAt(0).toUpperCase() + palabra.slice(1);

      return acumulador + formateada;
    }, '');
  }
}
