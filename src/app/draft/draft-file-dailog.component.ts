import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';
@Component({
  selector: 'app-draft-file-dailog',
  templateUrl: './draft-file-dailog.component.html',
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class DraftfileComponent implements OnInit {
  public file: any[];
  public form: FormGroup;
  public assign = [];
  public fileConnect = [];
  public sum = 0;
  public progressBar = 0;
  public numFile = 0;
  public assignMat = [];
  public listMatAssign = [];
  public listMatAssigns: any[];
  public matUseInOneDay = 0;
  public dayDifference: Number;
  public timeSchedule: Number;
  public dayDifferenceBetCurr: Number;
  /**
   *  variable 'form' use FormGroup for manage form
  */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DraftfileComponent>,
    private _formBuilder: FormBuilder,
    private assignService: AssignService,
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    console.log(this.data)
    this.assignMat = this.data.assignMat;
    this.getAssignMat();
    this.assignService.getSomeAssign(this.data.assignProjectCode).subscribe((results) => {
      this.assign = results;
      this.checkAssign();
    });
    this.getschedule();
  }
  getschedule() {
    const today: number = Date.now();
    const date2 =  new Date(this.data.assignScopeEnd);
    const date1 = new Date(this.data.assignScopeStart);
    const currDate = Math.abs(date1.valueOf() - today) / 1000 / 60 / 60 / 24;
    const timeDifference = date2.valueOf() - date1.valueOf();
    const dayDifference = (timeDifference / 1000 / 60 / 60 / 24);
    const dayDifferenceBetCurr = (dayDifference - currDate);
    this.dayDifferenceBetCurr = dayDifferenceBetCurr;
    this.dayDifference = dayDifference;
    this.timeSchedule = ((currDate * 100) / dayDifference );
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
        matUse: ele.matUse,
        matUseInOneDay: this.matUseInOneDay,
        matDate: ele.matDate,
        matReturn: ele.matReturn,
        matForm: ele.matForm
      });
      count++;
    });
    this.listMatAssigns = this.listMatAssign;
  }
  matUsed(val) {
    const assignMat = [];
    assignMat.push({
      _id: this.data._id,
      assignMat: val
    });
    this.assignService.updateMatUse(assignMat[0]._id, assignMat[0])
      .mergeMap(() => this.assignService.getAllAssign())
      .subscribe((results) => {
      });
  }

  checkAssign() {
    this.assign.forEach(element => {
      element.value.assignFile.forEach(value => {
        if (value.fileMove === this.data.assignEmpType) {
          this.fileConnect.push({
            productCodeR: value.productCodeR,
            productFile: value.productFile,
            fileNum: value.fileNum,
            fileRecive: value.fileRecive,
            fileProgress: value.fileProgress,
            fileFrom: element.value.assignEmpType
          });
        }
      });
    });
    this.data.assignFile.forEach(val => {
       this.numFile += 1;
       this.sum += val.fileProgress;
    });
    this.progressBar = this.sum / this.numFile;
  }

  /**
   * set value in close() for return
   */
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
}
