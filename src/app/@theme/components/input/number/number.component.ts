import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit, OnDestroy {

  @Input() text: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() value: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.formBuilder.control(this.value, [Validators.required]));
  }

  ngOnDestroy() {
    this.formGroup.removeControl(this.name);
  }

}
