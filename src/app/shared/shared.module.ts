import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgOptimizedImage } from '@angular/common'
import {MatIconModule} from '@angular/material/icon';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { HeaderComponent } from './header/header.component';
import { CdkModule } from './cdkmodule';
import { SortComponent } from './sort/sort.component';
import { materialModule } from './material';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    NavComponent,
    UserProfileViewComponent,
    HeaderComponent,
    SortComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule,
    ...materialModule,
    ...CdkModule,
  ],
  exports: [
    NavComponent,
    UserProfileViewComponent,
    HeaderComponent,
    SortComponent,
    FilterComponent

  ]
})
export class SharedModule { }
