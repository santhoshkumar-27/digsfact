import { Component, ViewChild, signal } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

import { SelectionModel } from "@angular/cdk/collections";
import { CustomPaginator } from 'src/app/shared/customlabelpaginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CaseList } from 'src/app/shared/interface';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class CaseListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  viewSearchInput = signal<boolean>(false)
  searchValue = signal<string>('');
  displayedColumns: string[] = [
    "select",
    "caseID",
    "customer",
    "shareAppVia",
    "joinWith",
    "symbol"
  ];
  dataSource = new MatTableDataSource<CaseList>([]);
  selection = new SelectionModel<CaseList>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // if there is a selection then clear that selection
    if (this.isSomeSelected()) {
      this.selection.clear();
    } else {
      this.isAllSelected()
        ? this.selection.clear()
        : this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  isSomeSelected() {
    console.log(this.selection.selected);
    return this.selection.selected.length > 0;
  }
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
