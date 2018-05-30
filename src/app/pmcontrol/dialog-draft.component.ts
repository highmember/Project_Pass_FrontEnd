import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-draft',
  templateUrl: './dialog-draft.component.html',
  styleUrls: ['./dialog-draft.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class DialogDraftComponent implements OnInit {
  name: any;
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public form: FormGroup;
  public formDraft: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public matFormGroup: FormGroup;
  public draftName: String;
  // public matNum: any[];
  public matItemAll = [];
  public file: String;
  public scopeStart: Date;
  public scopeEnd: Date;
  public scopeMat: Date;
  public nameDraft = ['Mr.AAAAA AAAAA', 'Mr.BBBBB BBBBB', 'Mr.CCCCC CCCCC', 'Mr.DDDDD DDDDD'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDraftComponent>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.formDraft = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.draftName, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.file, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.scopeEnd, Validators.required]
    });
    this.matFormGroup = this.formBuilder.group({});
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.draftName, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.file, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.scopeEnd, Validators.required]
    });
  }
  addMat() {
      this.matItemAll.push({
        matT: this.matFormGroup.value.matItem,
        numT: this.matFormGroup.value.matNum,
        dateT: this.scopeMat
      });
  }
  selectDraft() {
    console.log(this.draftName);
    this.draftName = this.formDraft.value.nameDraft;
    this.next();
  }
  selectFile() {
    this.file = 'test';
    this.next();
  }
  selectDate() {
    this.next();
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
      draftName: this.draftName,
      draftFile: this.file,
      draftStart: this.scopeStart,
      draftEnd: this.scopeEnd,
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
