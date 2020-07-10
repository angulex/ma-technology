import { Component, OnInit } from '@angular/core';

import {TESTIMONIALS} from 'src/app/texts/_testimonials';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent implements OnInit {
  constructor() { }

  testimonials = TESTIMONIALS;

  ngOnInit(): void {
  }

}
