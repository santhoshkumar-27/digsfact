import { Component, ViewChild, inject, signal } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

import { SelectionModel } from "@angular/cdk/collections";
import { CustomPaginator } from 'src/app/shared/customlabelpaginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CaseList, FilterCase, Sort } from 'src/app/shared/interface';
import { CaseService } from 'src/app/shared/service/case.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/shared/pop-up/pop-up.component';

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
  caseService = inject(CaseService);
  route = inject(Router);
  dialogService = inject(MatDialog)
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
  ngOnInit() {
  }
  getList() {
    this.caseService.getCaseList().subscribe({
      next: (value) => {
        console.log('value', value)
        this.dataSource = new MatTableDataSource<CaseList>(value.list);
        this.dataSource.paginator = this.paginator;

      }
    })
  }
  ngAfterViewInit() {
    this.getList()
  }
  isSomeSelected() {
    return this.selection.selected.length > 0;
  }
  addNewRecord() {
    console.log('new record')
  }

  sortHandle(value: Sort) {
    console.log('value sort emitted', value)
  }

  filterHandle(value: FilterCase) {
    console.log('value filter emitted', value)
  }

  navigateDetialCase(caseID: string) {
    this.route.navigate(['mycases', 'case', caseID])
  }

  openContact(title: string, value: CaseList) {
    const dialogRef = this.dialogService.open(PopUpComponent, {
      data: { title: title, customer: value },
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
