import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StoreService } from '../shared/service/store.service';
import { mergeMap } from 'rxjs/operators';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { AssignService } from '../shared/service/assign.service';
import { ProjectService } from '../shared/service/project.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../shared/service/employee.service';

@Component({
  selector: 'app-tablenumemployee',
  templateUrl: './tablenumemployee.component.html',
  styleUrls: ['./tablenumemployee.component.css']
})
export class TablenumemployeeComponent implements OnInit {
  public formProJC: FormGroup;
  public formNameEmp: FormGroup;
  public empName = [];
  public partofemp = ['Draft', 'Part1', 'Part2', 'Part3', 'Part4'];
  public nameOfEmp = [];
  public employeeNames = {
    _id: Object,
    employeeName: ''
  };
  public valueAssigns: any[];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private assignService: AssignService
  ) { }

  ngOnInit() {
    this.formProJC = this.formBuilder.group({});
    this.formNameEmp = this.formBuilder.group({});
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.empName = results;
      this.checkName();
    });
  }
  checkName() {
  }
  checkPart() {
    this.employeeService.getSomeEmployeeByPart(this.formProJC.value.partofemp).subscribe((results) => {
      results.forEach(ele => {
        this.nameOfEmp.push({
          _id: ele._id,
          employeeName: ele.employeeName
        });
      });
    });
    this.nameOfEmp = [];
  }
  getWorkEmp() {
    const valueAssign = [];
    this.assignService.getAssignByEmp(this.employeeNames.employeeName).subscribe((res) => {
      res.forEach(ele => {
        if (ele.assignProgress !== 100) {valueAssign.push({
          assignPMName: ele.assignPMName,
          assignProgress: ele.assignProgress,
          assignProjectCode: ele.assignProjectCode
        }); } else {}
      });
      this.valueAssigns = valueAssign;
    });
  }
}
