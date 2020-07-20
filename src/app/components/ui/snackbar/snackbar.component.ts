import { Component, OnInit, OnDestroy } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {
  constructor(private sharedService: SharedService) { }

  sub: Subscription;
  message = null;

  ngOnInit(): void {
    this.sub = this.sharedService.message$.subscribe((message: string) => {
      this.message = message;
      setTimeout(() => this.message = null, 3000);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
