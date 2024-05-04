import { Component, effect, signal } from '@angular/core';
import { sortLists } from '../constant';
import { Sort, SortLists } from '../interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  sortList = signal<SortLists>(sortLists)
  selectedSort = signal<Sort>(this.sortList()[0])

  constructor() {
    effect(() => {
      console.log('selectedSort', this.selectedSort())
    })
  }

  reset() {
    this.selectedSort.set(this.sortList()[0]);
  }
}
