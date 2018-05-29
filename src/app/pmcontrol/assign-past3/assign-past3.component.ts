import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-past3',
  templateUrl: './assign-past3.component.html',
  styleUrls: ['./assign-past3.component.css']
})
export class AssignPast3Component implements OnInit {
  name: any;
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public formSelectDraft: FormGroup;
  public formStep2: FormGroup;
  public formStep3: FormGroup;
  public formStep4: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;
  public draft: String;
  public draftName: String;
  public matNum: any[];
  public pmName: String;
  public nameDraft = ['Mr.AAAAA AAAAA', 'Mr.BBBBB BBBBB', 'Mr.CCCCC CCCCC', 'Mr.DDDDD DDDDD'];
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPast3Component>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.formSelectDraft = this.formBuilder.group({});
    this.formStep2 = this.formBuilder.group({});
    this.formStep3 = this.formBuilder.group({});
    this.formStep4 = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.draft, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.name, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.name, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.draft, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.name, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.name, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  selectDraft() {
    this.draft = this.draftName;
    this.next();
  }
  selectFile() {
    this.next();
  }
  selectDate() {
    this.next();
  }
  insertMat() {
    console.log(this.formStep4.value);
  }
  onSave() {

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

