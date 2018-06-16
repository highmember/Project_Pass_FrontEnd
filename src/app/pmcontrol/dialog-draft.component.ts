import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/service/employee.service';
import { removeSummaryDuplicates } from '@angular/compiler';
import { ProjectService } from '../shared/service/project.service';
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
  public draftName: String;
  public matNum: any[];
  public matItem: any[];
  public file: String;
  public scopeStart: Date;
  public scopeEnd: Date;
  public nameEm = [];
  public nameDraft = [];
  public product = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDraftComponent>,
    private employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    private projectService: ProjectService
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
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.nameEm = results;
      this.checkName();
    });
    this.projectService.getAllProject().subscribe((results) => {
      console.log(results)
      this.product = results;
    });
  }
  checkName() {
    this.nameEm.forEach(element => {
      if (element.employeeType === 'Draft') {
        this.nameDraft.push(element.employeeName);
      }
    });
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

  selectDraft() {
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
      draftName: this.draftName,
      draftFile: this.file,
      draftStart: this.scopeStart,
      draftEnd: this.scopeEnd,
      scopeEnd: this.scopeEnd,
    };
    this.dialogRef.close(value);
  }
}
