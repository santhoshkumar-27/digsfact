import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './case-list/case-list.component';
import { CaseViewComponent } from './case-view/case-view.component';

const routes: Routes = [
  {
    path: 'case-list',
    component: CaseListComponent
  },
  {
    path: 'case/:case id',
    component: CaseViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'case-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseHandlerRoutingModule { }
