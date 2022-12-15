import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPersonnelPipe } from './pipes/filter-personnel.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    FilterPersonnelPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    SortPipe,
    FilterPersonnelPipe
  ]
})
export class AppCommonModule { }
