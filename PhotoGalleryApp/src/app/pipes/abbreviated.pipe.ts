import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abbreviated', pure: true })
export class AbbreviatedPipe implements PipeTransform {
    transform(item: string, length: number = 5): string {
        if (item != null) {
            var _value = item.toString();
            length = length || 5;
            if (_value.length <= length) {
                return _value;
            }

            return _value.substring(0, length) + '...';
        }
        
        return "";
    }
}