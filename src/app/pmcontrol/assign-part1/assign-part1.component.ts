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
  public empN: String;
  public partScopeStart: Date;
  public partScopeEnd: Date;
  public partNote: String;
  public matScope: Date;
  public matScopeNew: Date;
  public matType = ['ชิ้น', 'อัน', 'ตัว', 'แกลลอน', 'ลิตร', 'ยูนิต', 'ตัน', 'กิโลกรัม', 'เส้น', 'กล่อง'];
  public fileMove = ['Draft', 'Part1', 'Part2', 'Part3', 'Part4'];
  public assignFileNgx: any[];
  public assignMatNgx: any[];
  public matreturn = false;

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
    if (this.data.assignRound === 'First') {
      this.assignFileNgx = [];
      this.assignMatNgx = [];
    } else {
      this.assignFileNgx = this.data.assignFile;
      this.partScopeStart = this.data.assignScopeStart;
      this.partScopeEnd = this.data.assignScopeEnd;
      this.partNote = this.data.assignNote;
      this.assignMatNgx = this.data.assignMat;
      this.empN = this.data.assignEmpName;
    }
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
      if (element.employeeType === this.data.assignEmpType) {
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
      if (element.projectCode === this.data.assignProjectCode) {
        element.projectFile.forEach(value => {
          this.fileProduct = Object.values(value);
          this.productCode.push(Object.keys(value));
        });
      }
    });
  }
  addProducts() {
    this.assignFileNgx.push({
      productCodeR: this.codeProducts,
      productFile: this.formFile.value.productCodeR,
      // tslint:disable-next-line:radix
      fileNum: parseInt(this.formFile.value.fileNum),
      fileRecive: 0,
      fileProgress: 0,
      fileMove: this.formFile.value.fileMove
    });
  }
  selectFile() {
    this.productCodes = [];
    this.fileProduct.forEach(element => {
      element.forEach(val => {
        if (val.codeProduct === this.codeProducts) {
          this.productCodes.push(val.file);
        }
      });
    });
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
    this.assignMatNgx.push({
      _id: this.data.matItem._id,
      matId: this.data.matItem.materialId,
      matItem: this.data.matItem.materialName,
      matType: this.matFormGroup.value.matType,
      matNum: this.matFormGroup.value.matNum,
      matRecive: 0,
      matDate: this.matScope,
      matForm: 'old',
      matUse: 0,
      matReturn: this.matreturn
    });
  }
  addMatNew() {
    this.assignMatNgx.push({
      _id: '',
      matId: '00000',
      matItem: this.matNewFormGroup.value.matItemNew,
      matType: this.matNewFormGroup.value.matTypeNew,
      matNum: this.matNewFormGroup.value.matNumNew,
      matRecive: 0,
      matDate: this.matScopeNew,
      matForm: 'new',
      matUse: 0,
      matReturn: this.matreturn
    });
  }
  deleteMat(msg: String) {
    const index: number = this.assignMatNgx.indexOf(msg);
    this.assignMatNgx.splice(index, 1);
  }
  // -------------------------------------------------------------------------------------------------------------------
  onSave() {
    const value = {
      assignProjectCode: this.data.assignProjectCode,
      assignProject_id: this.data.assignProject_id,
      assignPMName: this.data.assignPMName,
      assignEmpName: this.empN,
      assignFile: this.assignFileNgx,
      assignScopeStart: this.partScopeStart,
      assignScopeEnd: this.partScopeEnd,
      assignMat: this.assignMatNgx,
      assignProgress: this.data.assignProgress,
      assignNote: this.partNote,
      assignEmpType: this.data.assignEmpType,
    };
    this.dialogRef.close(value);
  }
}

