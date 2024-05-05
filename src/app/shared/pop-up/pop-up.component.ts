import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
