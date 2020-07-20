import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsModule } from '../sections/sections.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule
  ],
  exports: [HomePageComponent]
})
export class PagesModule { }
