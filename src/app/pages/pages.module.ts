import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SectionsModule } from '../sections/sections.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule
  ],
  exports: [HomePageComponent, AboutPageComponent, ContactPageComponent]
})
export class PagesModule { }
