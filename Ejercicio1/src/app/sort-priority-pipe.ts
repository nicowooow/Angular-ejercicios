import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortPriority',
})
export class SortPriorityPipe implements PipeTransform {
  transform(value: ITarea[], ...args: unknown[]): unknown {

    return value.sort((first: ITarea, second: ITarea) => first.prioridad - second.prioridad);
  }
}
