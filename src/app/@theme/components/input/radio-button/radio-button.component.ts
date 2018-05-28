import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() data = [];
  @Input() text: string;
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() value: string;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.value);
    this.formGroup.addControl(this.name, this.formBuilder.control(this.value, [Validators.required]));
  }


}
