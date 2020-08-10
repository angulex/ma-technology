import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    subject: [null, [Validators.required]],
    message: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.sharedService
      .sendMessage(this.formGroup.value)
      .subscribe((response: any) => {
        this.sharedService.openSnackbar(response.message);
        if (!response.error) {
          this.formGroup.reset();
        }
      });
  }
}
