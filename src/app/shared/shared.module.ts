import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgOptimizedImage } from '@angular/common'
import {MatIconModule} from '@angular/material/icon';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NavComponent,
    UserProfileViewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule
  ],
  exports: [
    NavComponent,
    UserProfileViewComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
