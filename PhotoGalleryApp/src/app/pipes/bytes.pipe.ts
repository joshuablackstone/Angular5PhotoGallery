import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bytes', pure: true })
export class BytesPipe implements PipeTransform {
    transform(bytes: number, precision: number = 1): string {
        if (isNaN(parseFloat(bytes.toString())) || !isFinite(bytes)) return '-';

        var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
            number = Math.floor(Math.log(bytes) / Math.log(1024));

        return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
    }
}