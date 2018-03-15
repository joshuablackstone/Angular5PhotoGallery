import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterBy', pure: true })
export class FilterByPipe implements PipeTransform {
    transform(data: any[], filterBy: any, column?: any): any[] {
        if (!filterBy) return data;

        if (typeof (filterBy) === 'string') {
            filterBy = filterBy.toLocaleLowerCase();

            if (column == null) {
                return data.filter(function (d) {
                    var _dataFound = false;
                    for (var column in d) {
                        var _keyFound = d[column].toString().toLocaleLowerCase().indexOf(filterBy) > -1;
                        if (_keyFound) {
                            _dataFound = true;
                        }
                    }

                    return _dataFound;
                });
            }
            else {
                return data.filter(function (d) {
                    return d[column].toLocaleLowerCase().indexOf(filterBy) > -1;
                });
            }
        }

        return data;
    }
}