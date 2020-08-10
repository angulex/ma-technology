import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { SharedService } from 'src/app/shared/shared.service';
import { childrenFadeInLeft } from 'src/app/app.animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [childrenFadeInLeft]
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() sections = null;
  bpSub: Subscription;
  isOpen = false;
  isMobile = false;

  constructor(private sharedService: SharedService, private bpObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.startBreakPointSub();
  }

  startBreakPointSub() {
    this.bpSub = this.bpObserver.observe([
      '(max-width: 959px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  scrollToAnchor(anchor: string) {
    this.sharedService.scrollToAnchor(anchor);
  }

  onMenu() {
    this.isOpen = !this.isOpen
  }

  endBreakPointSub() {
    this.bpSub.unsubscribe();
  }

  ngOnDestroy() {
    this.endBreakPointSub();
  }


}
