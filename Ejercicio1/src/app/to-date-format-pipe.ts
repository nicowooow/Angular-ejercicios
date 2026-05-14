import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toDateFormat',
})
export class ToDateFormatPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    if (!value) return '';

    const fechaReferencia = typeof value === 'string' ? new Date(value) : value;
    const ahora = new Date();

    // Calculamos la diferencia absoluta en milisegundos
    const diffMilisg = ahora.getTime() - fechaReferencia.getTime();
    const esVencida = diffMilisg > 0;
    const absMilisg = Math.abs(diffMilisg);

    // Cálculos de tiempo
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    const milisegundosPorHora = 60 * 60 * 1000;

    const dias = Math.floor(absMilisg / milisegundosPorDia);
    const horas = Math.floor((absMilisg % milisegundosPorDia) / milisegundosPorHora);

    // Construcción del mensaje
    const prefijo = esVencida ? "Vencida hace " : "Quedan ";

    return `${prefijo}${dias} día(s) con ${horas} horas`;
  
  }
}
