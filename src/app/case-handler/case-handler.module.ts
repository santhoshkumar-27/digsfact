import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseHandlerRoutingModule } from './case-handler-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CaseListComponent
  ],
  imports: [
    CommonModule,
    CaseHandlerRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ]
})
export class CaseHandlerModule { }
