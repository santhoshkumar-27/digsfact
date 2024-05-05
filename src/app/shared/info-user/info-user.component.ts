import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  dialogRef = inject(MatDialogRef);

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
