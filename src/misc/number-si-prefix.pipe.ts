import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberSiPrefix'
})
export class NumberSiPrefixPipe implements PipeTransform {
  public transform(value: any, digits: string): any {
    // tslint:disable-next-line:curly
    if (!value || value === undefined) return value;
    if (typeof(value) === 'string') {
        value = parseInt(value.replace(/,/g, ''), 0);
    }
    const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9,  symbol: 'G' },
        { value: 1E6,  symbol: 'M' },
        { value: 1E3,  symbol: 'k' }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (const it of si) {
        if (value >= it.value) {
        return (value / it.value).toFixed(parseInt(digits, 10)).replace(rx, '$1') + it.symbol;
        }
    }
    return value.toFixed(parseInt(digits, 10)).replace(rx, '$1');

  }
}
