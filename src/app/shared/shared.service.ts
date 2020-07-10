import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Email } from 'src/app/types/email.interface';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
  constructor(
    private http: HttpClient,
    private vpScroller: ViewportScroller,
  ) {}

  message$ = new Subject();


  sendMessage(email: Email) {
    return this.http.post(`${environment.cloudFunctions}/sendEmail`, email);
  }

  scrollToAnchor(anchor: string) {
    this.vpScroller.scrollToAnchor(anchor);
  }

  openSnackbar(message: string) {
    this.message$.next(message);
  }
}
