import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/service/employee.service';
import { ProjectService } from '../../shared/service/project.service';
import { elementAt } from 'rxjs/operator/elementAt';

@Component({
  selector: 'app-assign-part1',
  templateUrl: './assign-part1.component.html',
  styleUrls: ['./assign-part1.component.css']
})
export class AssignPart1Component implements OnInit {
  public formEmp: FormGroup;
  public formFile: FormGroup;
  public matFormGroup: FormGroup;
  public matNewFormGroup: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public empName = [];
  public empP1 = [];
  public projectFile: any[];
  public productCode = [];
  public codeProducts: String;
  public fileProduct: any[];
  public productCodes = [];
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
    private dialogRef: MatDialogRef<AssignPart1Component>,
    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.formEmp = this.formBuilder.group({});
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.empName = results;
      this.checkName();
    });
    this.formFile = this.formBuilder.group({});
    this.projectService.getAllProject().subscribe((results) => {
      this.projectFile = results;
      console.log(this.projectFile);
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
      if (element.employeeType === 'Part1') {
        this.empP1.push(element.employeeName);
      }
    });
  }
  selectEmp() {
    this.empN = this.formEmp.value.empP1;
    this.next();
  }
  // -------------------------------------------------------------------------------------------------------------------
  checkFile() {
    this.projectFile.forEach(element => {
      if (element.projectCode === this.data.projectCode) {
        element.projectFile.forEach(value => {
          console.log(value);
          console.log(Object.keys(value));
          this.fileProduct = Object.values(value);
          this.productCode.push(Object.keys(value));
        });
      }
    });
    console.log(this.fileProduct);
  }
  addProducts() {
    this.products.push({
      productCodeR: this.codeProducts,
      productFile: this.formFile.value.productCodeR,
      fileNum: this.formFile.value.fileNum,
      fileRecive: 0,
    });
    this.assignFileNgx = this.products;
    console.log(this.assignFileNgx);
  }
  selectFile() {
    this.productCodes = [];
    this.fileProduct.forEach(element => {
      element.forEach(val => {
        if (val.codeProduct === this.codeProducts) {
          console.log(Object.values(val.codeProduct));
          this.productCodes.push(val.file);
        }
      });
    });
    console.log(this.productCodes);
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
    console.log(this.assignMatNgx);
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
    console.log(this.assignMatNgx);
  }
  deleteMat(msg: String) {
    const index: number = this.assignMatNgx.indexOf(msg);
    this.assignMatNgx.splice(index, 1);
    console.log(this.assignMatNgx);
  }
  // -------------------------------------------------------------------------------------------------------------------
  onSave() {
    const value = {
      assignProject: this.data.projectCode,
      assignPMName: this.data.namePm,
      assignEmpName: this.empN,
      assignFile: this.assignFileNgx,
      assignScopeStart: this.partScopeStart,
      assignScopeEnd: this.partScopeEnd,
      assignMat: this.assignMatNgx,
      assignProgress: this.data.projProgress,
      assignNote: this.partNote,
      assignEmpType: 'Part1',
    };
    this.dialogRef.close(value);
  }
}

