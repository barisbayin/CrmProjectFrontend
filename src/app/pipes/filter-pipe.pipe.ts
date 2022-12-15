import { Pipe, PipeTransform } from '@angular/core';
import { translateTurkishChars } from '../helpers/string-utils';
//import { RouteInfo } from '../models/routeInfo';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
/*
    transform(items: any[], query: string) :any[] {
      if (!items) {
        return items;
      }
  
      // Aranan kelimeyi Türkçe karakterleri değiştirilerek küçük harfe çevirin
      query = String(translateTurkishChars(query));
      return items.filter(item =>
        Object.keys(item).some(key =>
          typeof item[key] === 'string' && translateTurkishChars(item).includes(query),
        ),
      );
    }
  }
*/
  
  transform(value: any[], filterText: string): any[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((r: any) => r.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}