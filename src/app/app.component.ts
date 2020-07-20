import { Component } from '@angular/core';

import { SECTIONS } from 'src/app/texts/_sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sections = SECTIONS;


}
