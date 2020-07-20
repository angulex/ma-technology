import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';

import { AboutSectionComponent } from './about-section/about-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { SharedModule } from '../shared/shared.module';

import { FeatureComponent } from './features-section/feature/feature.component';
import { TestimonialComponent } from './testimonials-section/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AboutSectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
    CtaSectionComponent,
    FeaturesSectionComponent,
    HeroSectionComponent,
    TestimonialsSectionComponent,
    FeatureComponent,
    TestimonialComponent,
  ],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [
    AboutSectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
    CtaSectionComponent,
    FeaturesSectionComponent,
    HeroSectionComponent,
    TestimonialsSectionComponent,
    FeatureComponent,
    TestimonialComponent,
  ]
})
export class SectionsModule { }
