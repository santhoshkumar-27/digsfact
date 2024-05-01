import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent {

  viewSearchInput = signal<boolean>(false)
  searchValue = signal<string>('');
  
  addNewRecord() {
    console.log('new record')
  }

  openSortDialog() {
    console.log(' open sort dialog')
  }

  openFilterDialog() {
    console.log(' open sort dialog')
  }
}
