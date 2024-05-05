import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  goBackListPage() {
    this.router.navigate(['mycases', 'case-list'])
  }

  openNotes() {
    const dialogRef = this.dialogService.open(NotesComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
