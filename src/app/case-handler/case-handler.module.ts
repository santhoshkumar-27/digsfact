import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseHandlerRoutingModule } from './case-handler-routing.module';
import { CaseListComponent } from './case-list/case-list.component';


@NgModule({
  declarations: [
    CaseListComponent
  ],
  imports: [
    CommonModule,
    CaseHandlerRoutingModule
  ]
})
export class CaseHandlerModule { }
