import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteira',
  standalone: true
})
export class CarteiraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
