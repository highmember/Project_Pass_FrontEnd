import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/service/employee.service';
import { ProjectService } from '../shared/service/project.service';
import { StoreService } from '../shared/service/store.service';

@Component({
  selector: 'app-dialog-draft',
  templateUrl: './dialog-draft.component.html',
  styleUrls: ['./dialog-draft.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class DialogDraftComponent implements OnInit {
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
  public matNewFormGroup: FormGroup;
  public draftN: String;
  public matItemAll = [];
  public file = [];
  public scopeStart: Date;
  public scopeEnd: Date;
  public note: String;
  public scopeMat: Date;
  public scopeMatNew: Date;
  public nameEm = [];
  public nameEM: any[];
  public fileProject: any[];
  public nameDraft = [];
  public productCode = [];
  public product = [];
  public matItem = [];
  public matShow = [];
  public products = [];
  public matCheck = [];
  public typeMat = ['ชิ้น', 'อัน', 'ตัว', 'แกลลอน', 'ลิตร', 'ยูนิต', 'ตัน', 'กิโลกรัม', 'เส้น', 'กล่อง'];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDraftComponent>,

    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private storeService: StoreService,
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
    this.matFormGroup = this.formBuilder.group({});
    this.matNewFormGroup = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.nameEM, Validators.required]
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
  }
  checkName() {
    this.nameEm.forEach(element => {
      if (element.employeeType === 'Draft') {
        this.nameDraft.push(element.employeeName);
      }
    });
  }
  checkFile() {
    this.fileProject.forEach(element => {
      if (element.projectCode === '111111122123213') {
        element.projectFile.forEach(value => {
          this.productCode.push(value.codeProduct);
        });
      }
    });
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
      matId: this.data.matItem,
      matT: this.data.matItem.materialName,
      numT: this.matFormGroup.value.matNum,
      dateT: this.scopeMat
    });
  }
  addMatNew() {
    this.matItemAll.push({
      matId: '',
      matT: this.matNewFormGroup.value.matItemNew,
      numT: this.matNewFormGroup.value.matNumNew,
      dateT: this.scopeMatNew
    });
  }
  selectDraft() {
    this.draftN = this.formDraft.value.nameDraft;
    this.next();
  }
  addProducts() {
    this.products.push(this.formFile.value.productCode);
  }
  /**
   * save value in variable and return
   */
  onSave() {
    const value = {
      assignProject: this.data.project[0]._id,
      assignPMName: this.data.project[0].pm,
      assignEmpName: this.draftN,
      assignFile: this.products,
      assignScopeStart: this.scopeStart,
      assignScopeEnd: this.scopeEnd,
      assignMat: this.matItemAll,
      assignProgress: this.data.project[0].projectProgress,
      assignNote: this.note,
      assignEmpType: 'Draft',
    };
    this.dialogRef.close(value);
  }
}
