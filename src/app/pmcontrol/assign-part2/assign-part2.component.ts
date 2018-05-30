import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-part2',
  templateUrl: './assign-part2.component.html',
  styleUrls: ['./assign-part2.component.css']
})
export class AssignPart2Component implements OnInit {
  public matFormGroup: FormGroup;
  public form: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  // public matNum: any[];
  public matItemAll = [];
  public file: String;
  public scopeStart: Date;
  public scopeEnd: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPart2Component>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.file, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
    this.matFormGroup = this.formBuilder.group({});
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.file, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
  }

  addMat() {
    this.matItemAll.push({
      matT: this.matFormGroup.value.matItem,
      numT: this.matFormGroup.value.matNum
    });
    console.log(this.matFormGroup.value);
  }
  selectFile() {
    this.file = 'test';
    this.next();
  }
  selectDate() {
    this.next();
  }

  insertMat() {
  }
  /**
   * set value in close() for return
   */
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
  /**
   * save value in variable and return
   */
  onSave() {
    const value = {
      file: this.file,
      scopeStart: this.scopeStart,
      scopeEnd: this.scopeEnd,
    };
    this.dialogRef.close(value);
  }
  onSaveMat() {
    const vMat = {
      matItemAll: this.matItemAll
    };
    this.dialogRef.close(vMat);
  }
}
