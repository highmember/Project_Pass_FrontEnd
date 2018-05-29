import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class SaleDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public form: FormGroup;
  public formSelectCus: FormGroup;
  public formProject: FormGroup;
  public formScope: FormGroup;
  public formPM: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public fourthFormGroup: FormGroup;
  public fifthFormGroup: FormGroup;
  public customer: any[];
  public project: any[];
  public type: String;
  public customerName: String;
  public pmName: String;
  public code: String;
  public scopeStart: Date;
  public scopeEnd: Date;
  public product = [];
  public typeProject = ['Project Jon', 'Mass', 'Auto Mobile'];
  public oldCustomer = ['สุทธิ ใจเย็น', 'สุขุม ว่องไว', 'มานะ ใจสั่น', 'นรากร สงคราม', 'วรชิตร สมควร'];
  public pm = ['นารีรัตน์ สุดใจ', 'วรวุฒิ สมใจ', 'สมพร เดโช', 'อรนงค์ สุดใจ', 'ประสงค์ เงินดี'];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SaleDialogComponent>,
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
    this.formScope = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.type, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.customerName, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.type, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.customerName, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.code, Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: [this.scopeEnd, Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: [this.pmName, Validators.required]
    });
  }

  selectProjectType() {
    this.next();
  }

  insertCustomer() {
    this.customerName = this.form.value.customerName;
    this.customer = this.form.value;
    this.next();
  }

  selectCustomer() {
    this.customerName = this.formSelectCus.value.customerName;
    this.customer = this.formSelectCus.value;
    this.next();
  }

  insertProject() {
    this.code = this.formProject.value.code;
    this.project = this.formProject.value;
    this.next();
  }

  addProduct() {
    this.product.push(this.data.file);
  }

  selectPM() {
    this.pmName = this.formPM.value.pm;
    this.next();
  }

  insertScope() {
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
      projectCode: this.code,
      projectFile: this.product,
      projectType: this.type,
      scopeStart: this.scopeStart,
      scopeEnd: this.scopeEnd,
      customer: this.customer,
      pm: this.pmName
    };
    this.dialogRef.close(value);
  }

}
