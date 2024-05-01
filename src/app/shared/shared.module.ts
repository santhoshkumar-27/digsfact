import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgOptimizedImage } from '@angular/common'
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
