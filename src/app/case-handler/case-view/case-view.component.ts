import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoUserComponent } from 'src/app/shared/info-user/info-user.component';
import { NotesComponent } from 'src/app/shared/notes/notes.component';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.scss']
})
export class CaseViewComponent {
  router = inject(Router);
  measures = signal<string[]>(['CM', 'Inches', 'Feet'])
  selectedMeasure = signal<string>(this.measures()[0])
  dialogService = inject(MatDialog)
  measureDisable = signal(true);
  goBackListPage() {
    this.router.navigate(['mycases', 'case-list'])
  }

  openNotes() {
    const dialogRef = this.dialogService.open(NotesComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  removePinsHandle() {

  }

  measuresHandle() {

  }
  expandPlansHandle() {
    if (!this.measureDisable()) {
      return;
    }
    this.measureDisable.set(false)
    const dialogRef = this.dialogService.open(InfoUserComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  magnifyHandle() {

  }

  supportHandle() {

  }

  frequentQuestions() {

  }
  resetHandle() {

  }

  saveHandle() {

  }
}
