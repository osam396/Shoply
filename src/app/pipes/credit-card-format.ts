import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormat implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    const digits = value.toString().replace(/\D/g, '');

    const groups = digits.match(/.{1,4}/g);

    return groups ? groups.join(' - ') : digits;
  }
}