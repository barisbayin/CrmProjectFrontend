import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortBy: string, sortOrder: 'asc' | 'desc') {
    if (!items) {
      return items;
    }

    return items.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
