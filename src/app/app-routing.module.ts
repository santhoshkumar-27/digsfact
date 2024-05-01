import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mycases',
    loadChildren: () => import('./case-handler/case-handler.module').then(m => m.CaseHandlerModule),
  },
  {
    path: '',
    redirectTo: 'mycases',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
