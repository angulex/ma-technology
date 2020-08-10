import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsModule } from '../sections/sections.module';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LegalComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule
  ],
  exports: [
    HomePageComponent,
    LegalComponent,
    PrivacyComponent
  ]
})
export class PagesModule { }
