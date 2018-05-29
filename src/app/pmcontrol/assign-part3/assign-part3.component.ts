import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-part3',
  templateUrl: './assign-part3.component.html',
  styleUrls: ['./assign-part3.component.css']
})
export class AssignPart3Component implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public formManager: FormGroup;
  public form: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public file: String;
  public manager: String;
  public matNum: any[];
  public matItem: any[];
  public scopeStart: Date;
  public scopeEnd: Date;
  public managerName = ['Mr.AAAAA AAAAA', 'Mr.BBBBB BBBBB', 'Mr.CCCCC CCCCC', 'Mr.DDDDD DDDDD'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPart3Component>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.formManager = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.manager, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.file, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.scopeEnd, Validators.required]
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.manager, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.file, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.scopeEnd, Validators.required]
    });
  }

  selectManager() {
    this.manager = this.formManager.value.managerName;
    this.next();
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
      matItem: this.matItem,
      matNum: this.matNum
    };
    this.dialogRef.close(value);
  }
}

