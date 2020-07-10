import { Component, OnInit } from '@angular/core';

import {CLIENTS} from 'src/app/texts/_clients';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent implements OnInit {
  clients = CLIENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
