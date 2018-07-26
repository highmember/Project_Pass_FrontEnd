import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignService } from '../shared/service/assign.service';
import { Data } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pmviewdetail',
  templateUrl: './pmviewdetail.component.html',
  styleUrls: ['./pmviewdetail.component.css']
})
export class PmviewdetailComponent implements OnInit {
  public assignEmpName: string;
  public assign_id: String;
  public assignScopeStart: Data;
  public assignScopeEnd: Data;
  public assignFile = [];
  public assignFileNum = 0;
  public assignMatNum = 0;
  public assignBarProgress = 0;
  public sumProgress = 0;
  public assignMat = [];
  public listMatAssign = [];
  public listMatAssigns: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.assign_id = this.data.assign_id,
    this.assignFile = this.data.assignFile;
    this.assignMat = this.data.assignMat;
    this.assignScopeStart = this.data.assignScopeStart;
    this.assignScopeEnd = this.data.assignScopeEnd;
    this.assignEmpName = this.data.assignEmpName;
    this.assignFileNum = this.assignFile.length;
    this.assignMatNum = this.assignMat.length;
    this.getAssignMat();
    this.assignFile.forEach(ele => {
      this.sumProgress += ele.fileProgress;
    });
    this.assignBarProgress = this.sumProgress / this.assignFileNum;
  }
  getAssignMat() {
    let count = 0;
    this.assignMat.forEach((ele) => {
      this.listMatAssign.push({
        count: count,
        matId: ele.matId,
        matItem: ele.matItem,
        matNum: ele.matNum,
        matType: ele.matType,
        matRecive: ele.matRecive,
        matDate: ele.matDate,
        matUse: ele.matUse,
        matReturn: ele.matReturn
      });
      count++;
    });
    this.listMatAssigns = this.listMatAssign;
  }
  returnMat(val) {
    const matReturnList = [];
    matReturnList.push({
      _id: this.data.assign_id,
      matId: val.matId,
      matItem: val.matItem,
      matNum: val.matNum,
      matType: val.matType,
      matRecive: val.matRecive,
      matDate: val.matDate,
      matUse: val.matUse,
      matReturn: val.matReturn,
      count: val.count,
    });
    this.assignService.updateAssignReturnMat(matReturnList[0]._id, matReturnList[0]).pipe(
      mergeMap(() => this.assignService.getAllAssign()))
      .subscribe((results) => {
        console.log(results);
      });
    console.log(val)
  }

}
