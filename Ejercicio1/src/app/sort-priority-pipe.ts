import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPriority',
})
export class SortPriorityPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
