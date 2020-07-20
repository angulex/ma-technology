import { Component, OnInit } from '@angular/core';

import { FEATURES } from 'src/app/texts/_features';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {
  features = FEATURES;

  constructor() { }

  ngOnInit(): void { }
}
