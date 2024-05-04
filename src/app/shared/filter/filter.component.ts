import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { FilterCase, FilterCases } from '../interface';
import { filterLists } from '../constant';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterEmitted = new EventEmitter<FilterCase>();
  
  filterLists = signal<FilterCases>(filterLists);
  selectedFilter = signal<FilterCase | undefined>(undefined);

  constructor() {
    effect(() => {
      this.filterEmitted.emit(this.selectedFilter());
    })
  }

  reset() {
    this.selectedFilter.set(undefined);
  }
}
