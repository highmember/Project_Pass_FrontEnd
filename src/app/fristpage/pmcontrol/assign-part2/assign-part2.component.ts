import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../shared/service/project.service';
import { EmployeeService } from '../../../shared/service/employee.service';

@Component({
  selector: 'app-assign-part2',
  templateUrl: './assign-part2.component.html',
  styleUrls: ['./assign-part2.component.css']
})
export class AssignPart2Component implements OnInit {
  public formEmp: FormGroup;
  public formFile: FormGroup;
  public matFormGroup: FormGroup;
  public matNewFormGroup: FormGroup;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public empName: any[];
  public empP2 = [];
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssignPart2Component>,
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
      if (element.employeeType === 'Part2') {
        this.empP2.push(element.employeeName);
      }
    });
  }
  selectEmp() {
    this.empN = this.formEmp.value.empP2;
    this.next();
  }
  // -------------------------------------------------------------------------------------------------------------------
  checkFile() {
    this.projectFile.forEach(element => {
      if (element.projectCode === '010618001') {
        element.projectFile.forEach(value => {
          this.productCode.push(value.codeProduct);
        });
      }
    });
  }
  addProducts() {
    this.products.push(this.formFile.value.productCode);
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
  }
  addMatNew() {
    this.matItemAll.push({
      matId: '',
      matItem: this.matNewFormGroup.value.matItemNew,
      matType: this.matNewFormGroup.value.matTypeNew,
      matNum: this.matNewFormGroup.value.matNumNew,
      matDate: this.matScopeNew
    });
  }
  // -------------------------------------------------------------------------------------------------------------------
  onSave() {
    const value = {
      assignProject: this.data.project[0]._id,
      assignPMName: this.data.project[0].pm,
      assignEmpName: this.empN,
      assignFile: this.products,
      assignScopeStart: this.partScopeStart,
      assignScopeEnd: this.partScopeEnd,
      assignMat: this.matItemAll,
      assignProgress: this.data.project[0].projectProgress,
      assignNote: this.partNote,
      assignEmpType: 'Part2',
    };
    this.dialogRef.close(value);
  }
}

