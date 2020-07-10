import { NgModule } from '@angular/core';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HeroSectionComponent, ClientsSectionComponent, CtaSectionComponent, FeaturesSectionComponent, TestimonialsSectionComponent, AboutSectionComponent, ContactSectionComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [
    HeroSectionComponent, ClientsSectionComponent, CtaSectionComponent, FeaturesSectionComponent, TestimonialsSectionComponent, AboutSectionComponent, ContactSectionComponent
  ]
})
export class SectionsModule { }
