import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/service/employee.service';
import { ProjectService } from '../../shared/service/project.service';

@Component({
  selector: 'app-assign-part3',
  templateUrl: './assign-part3.component.html',
  styleUrls: ['./assign-part3.component.css']
})
export class AssignPart3Component implements OnInit {
  public formEmp: FormGroup;
  public formFile: FormGroup;
  public matFormGroup: FormGroup;
  public matNewFormGroup: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public empName: any[];
  public empP3 = [];
  public projectFile: any[];
  public productCode = [];
  public products = [];
  public empN: String;
  public partScopeStart: Date;
  public partScopeEnd: Date;
  public partNote: String;
  public matItemAll = [];
  public matScope: Date;
  public matScopeNew: Date;
  public matType = ['ชิ้น', 'อัน', 'ตัว', 'แกลลอน', 'ลิตร', 'ยูนิต', 'ตัน', 'กิโลกรัม', 'เส้น', 'กล่อง'];
  public assignFileNgx: any[];
  public assignMatNgx: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPart3Component>,
    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.formEmp = this.formBuilder.group({});
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.empName = results;
      this.checkName();
    });
    this.formFile = this.formBuilder.group({});
    this.projectService.getAllProject().subscribe((results) => {
      this.projectFile = results;
      this.checkFile();
    });
    this.matFormGroup = this.formBuilder.group({});
    this.matNewFormGroup = this.formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.empName, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.projectFile, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.partScopeEnd, Validators.required]
    });
  }

  next() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.empName, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [this.projectFile, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: [this.partScopeEnd, Validators.required]
    });
  }
// -------------------------------------------------------------------------------------------------------------------
  checkName() {
    this.empName.forEach(element => {
      if (element.employeeType === 'Part3') {
        this.empP3.push(element.employeeName);
      }
    });
  }
  selectEmp() {
    this.empN = this.formEmp.value.empP3;
    this.next();
  }
// -------------------------------------------------------------------------------------------------------------------
  checkFile() {
    this.projectFile.forEach(element => {
      if (element.projectCode === '17146') {
        element.projectFile.forEach(value => {
          this.productCode.push(value.codeProduct);
        });
      }
    });
  }
  addProducts() {
    this.products.push({
      productCodeR: this.formFile.value.productCodeR,
      productCode: this.formFile.value.productCode,
      fileNum: this.formFile.value.fileNum,
      fileRecive: 0,
    });
    this.assignFileNgx = this.products;
    console.log(this.assignFileNgx);
  }
  deleteMsg(msg: String) {
    const index: number = this.assignFileNgx.indexOf(msg);
    this.assignFileNgx.splice(index, 1);
  }
  checkProductFile() {
    this.next();
  }
  // -------------------------------------------------------------------------------------------------------------------
  addMat() {
    this.matItemAll.push({
      matId: this.data.matItem,
      matItem: this.data.matItem.materialName,
      matType: this.matFormGroup.value.matType,
      matNum: this.matFormGroup.value.matNum,
      matDate: this.matScope
    });
    this.assignMatNgx = this.matItemAll;
  }
  addMatNew() {
    this.matItemAll.push({
      matId: '',
      matItem: this.matNewFormGroup.value.matItemNew,
      matType: this.matNewFormGroup.value.matTypeNew,
      matNum: this.matNewFormGroup.value.matNumNew,
      matDate: this.matScopeNew
    });
    this.assignMatNgx = this.matItemAll;
  }
  deleteMat(msg: String) {
    const index: number = this.assignMatNgx.indexOf(msg);
    this.assignMatNgx.splice(index, 1);
    console.log(this.assignMatNgx);
  }
  // -------------------------------------------------------------------------------------------------------------------
  onSave() {
    const value = {
      assignProject: this.data.project[0]._id,
      assignPMName: this.data.project[0].pm,
      assignEmpName: this.empN,
      assignFile: this.assignFileNgx,
      assignScopeStart: this.partScopeStart,
      assignScopeEnd: this.partScopeEnd,
      assignMat: this.assignMatNgx,
      assignProgress: this.data.project[0].projectProgress,
      assignNote: this.partNote,
      assignEmpType: 'Part3',
    };
    this.dialogRef.close(value);
  }
}

