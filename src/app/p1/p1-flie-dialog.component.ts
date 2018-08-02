import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';
@Component({
  selector: 'app-flie-p1-dialog',
  templateUrl: './p1-flie-dialog.component.html',
})
export class P1FileDialogComponent implements OnInit {
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
  /**
   *  variable 'form' use FormGroup for manage form
  */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<P1FileDialogComponent>,
    private _formBuilder: FormBuilder,
    private assignService: AssignService,
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.assignMat = this.data.assignMat;
    this.getAssignMat();
    this.assignService.getSomeAssign(this.data.assignProjectCode).subscribe((results) => {
      this.assign = results;
      this.checkAssign();
    });
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
          if (element.value.assignEmpType === 'Draft') {
            this.fileConnect.push({
              productCodeR: value.productCodeR,
              productFile: value.file,
              fileNum: value.fileNum,
              fileRecive: value.fileRecive,
              fileProgress: value.fileProgress,
              fileFrom: element.value.assignEmpType
            }); } else {
            this.fileConnect.push({
              productCodeR: value.productCodeR,
              productFile: value.productFile,
              fileNum: value.fileNum,
              fileRecive: value.fileRecive,
              fileProgress: value.fileProgress,
              fileFrom: element.value.assignEmpType
            }); }
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
