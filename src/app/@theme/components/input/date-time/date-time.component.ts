import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {
  @Input() text: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() value: string;
  @Input() allowNull: false;
  @ViewChild(MatDatepicker) datePicker: MatDatepicker<Date>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.allowNull) {
      this.formGroup.addControl(this.name, this.formBuilder.control(this.value, [Validators.required]));
    } else {
      this.formGroup.addControl(this.name, this.formBuilder.control(this.value, []));
    }

  }
  openDatePicker() {
    this.datePicker.open();
  }

}
