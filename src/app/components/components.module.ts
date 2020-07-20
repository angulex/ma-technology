import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CreditsComponent } from './credits/credits.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LayerComponent } from './ui/layer/layer.component';
import { SnackbarComponent } from './ui/snackbar/snackbar.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CreditsComponent,
    LayerComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CreditsComponent,
    LayerComponent,
    SnackbarComponent
  ]
})

export class ComponentsModule { }
