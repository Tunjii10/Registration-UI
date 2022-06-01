import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiContent } from '../api-content';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  // form grouping with validators
  myForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    city: ['', Validators.required],
    website: ['', Validators.required],
  });
  @Output() NewDoctorEvent: EventEmitter<ApiContent>;
  constructor(private fb: FormBuilder) {
    this.NewDoctorEvent = new EventEmitter<ApiContent>();
  }

  ngOnInit(): void {}

  // submit event
  onSubmit(myForm: FormGroup) {
    if (myForm.valid) {
      const bodyContent = {
        name: this.myForm.value.name,
        username: this.myForm.value.username,
        email: this.myForm.value.email,
        phone: this.myForm.value.phone,
        address: {
          city: this.myForm.value.city,
        },
        website: this.myForm.value.website,
      };
      this.NewDoctorEvent.emit(bodyContent);
      this.myForm.reset();
    }
  }
}
