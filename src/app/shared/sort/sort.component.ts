import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { sortLists } from '../constant';
import { Sort, SortLists } from '../interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Output() sortEmitted = new EventEmitter<Sort>();
  
  sortList = signal<SortLists>(sortLists)
  selectedSort = signal<Sort>(this.sortList()[0])

  constructor() {
    effect(() => {
      this.sortEmitted.emit(this.selectedSort())
    })
  }

  reset() {
    this.selectedSort.set(this.sortList()[0]);
  }
}
