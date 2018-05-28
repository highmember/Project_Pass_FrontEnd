import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Input() text: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() value: string;
  @ViewChild(MatDatepicker) datePicker: MatDatepicker<Date>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.formBuilder.control(this.value, [Validators.required]));
  }

}
