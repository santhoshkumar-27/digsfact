import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CaseHandlerRoutingModule } from './case-handler-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { materialModule } from '../shared/material';


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
    ...materialModule,
    FormsModule,
    NgOptimizedImage,

  ]
})
export class CaseHandlerModule { }
