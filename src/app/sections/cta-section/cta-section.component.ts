import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss']
})
export class CtaSectionComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  scrollToAnchor(anchor: string) {
    this.sharedService.scrollToAnchor(anchor);
  }
}
