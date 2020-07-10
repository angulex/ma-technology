import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  @Input() testimonial: any;

  ngOnInit(): void {
  }

}
