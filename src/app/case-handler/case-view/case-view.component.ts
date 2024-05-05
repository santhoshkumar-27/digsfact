import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.scss']
})
export class CaseViewComponent {
  router = inject(Router)
  goBackListPage() {
    this.router.navigate(['mycases', 'case-list'])
  }
}
