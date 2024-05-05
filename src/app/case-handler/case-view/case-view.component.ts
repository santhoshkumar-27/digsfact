import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.scss']
})
export class CaseViewComponent {
  router = inject(Router);
  measures = signal<string[]>(['CM', 'Inches', 'Feet'])
  selectedMeasure = signal<string>(this.measures()[0])
  goBackListPage() {
    this.router.navigate(['mycases', 'case-list'])
  }
}
