import { Pipe, PipeTransform } from '@angular/core';
import { Personnel } from '../models/personnel';

@Pipe({
  name: 'filterPersonnel'
})
export class FilterPersonnelPipe implements PipeTransform {

  transform(value: Personnel[], filterText: string): Personnel[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((r: Personnel) => r.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}
