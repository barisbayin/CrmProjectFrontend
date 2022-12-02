import { Pipe, PipeTransform } from '@angular/core';
import { RouteInfo } from '../models/routeInfo';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: RouteInfo[], filterText: string): RouteInfo[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((r: RouteInfo) => r.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}
