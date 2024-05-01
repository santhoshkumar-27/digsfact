import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseHandlerRoutingModule } from './case-handler-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CaseListComponent
  ],
  imports: [
    CommonModule,
    CaseHandlerRoutingModule,
    SharedModule
  ]
})
export class CaseHandlerModule { }
