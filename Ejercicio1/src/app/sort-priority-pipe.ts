import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortPriority',
})
export class SortPriorityPipe implements PipeTransform {
  transform(value: ITarea[], ...args: unknown[]): ITarea[] {
    if (!value) return [];
    const listaOrdenada = [...value].sort((first: ITarea, second: ITarea) => first.prioridad - second.prioridad);
    console.log(listaOrdenada);
    return listaOrdenada;
  }
}
