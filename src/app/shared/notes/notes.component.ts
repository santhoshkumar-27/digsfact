import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  dialogRef = inject(MatDialogRef);

  onCloseClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    this.dialogRef.close();
  }
}
