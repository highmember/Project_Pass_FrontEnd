import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-past2',
  templateUrl: './assign-past2.component.html',
  styleUrls: ['./assign-past2.component.css']
})
export class AssignPast2Component implements OnInit {
  formPM: FormGroup;
  public form: FormGroup;
  public formSelectCus: FormGroup;
  public formProject: FormGroup;
  public formSelectMat: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;
  public name: String;
  public code: String;
  public pmName: String;
  public nameDraft = ['Mr.AAAAA AAAAA', 'Mr.BBBBB BBBBB', 'Mr.CCCCC CCCCC', 'Mr.DDDDD DDDDD'];
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPast2Component>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.formSelectCus = this.formBuilder.group({});
    this.formProject = this.formBuilder.group({});
    this.formPM = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.name, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.name, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.name, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.name, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  selectDraft() {
    this.next();
  }
  selectFile() {
    this.next();
  }
  insertMat() {
    console.log(this.formSelectMat.value);
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
}
