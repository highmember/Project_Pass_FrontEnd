import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/service/employee.service';
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
  public formFile: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public matFormGroup: FormGroup;
  public draftN: String;
  // public matNum: any[];
  public matItemAll = [];
  public file = [];
  public scopeStart: Date;
  public scopeEnd: Date;
  public scopeMat: Date;
  public nameEM: any[];
  public fileProject: any[];
  public nameDraft = [];
  public projectFile = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDraftComponent>,
    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private projectService: ProjectService
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.nameEM = results;
      this.checkName();
    });
    this.projectService.getAllProject().subscribe((results) => {
      this.fileProject = results;
      this.checkFile();
    });
    this.form = this.formBuilder.group({});
    this.formDraft = this.formBuilder.group({});
    this.formFile = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.nameEM, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.file, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.scopeEnd, Validators.required]
    });
    this.matFormGroup = this.formBuilder.group({});
  }
  checkName() {
    this.nameEM.forEach(element => {
      this.nameDraft.push(element.employeeName);
    });
  }
  checkFile() {
    this.fileProject.forEach(element => {
       this.projectFile.push(element.projectFile);
       console.log(this.projectFile);
    });
    // console.log(this.fileProject);
  }
  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.nameEM, Validators.required]
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
    this.draftN = this.formDraft.value.nameDraft;
    console.log(this.draftN);
    this.next();
  }
  selectFile() {
    // this.file =
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
      draftName: this.draftN,
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
