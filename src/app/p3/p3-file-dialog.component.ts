import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';
@Component({
  selector: 'app-file-p3-dialog',
  templateUrl: './p3-file-dialog.component.html',
})
export class P3FileDialogComponent implements OnInit {
  public file: any[];
  public form: FormGroup;
  public assign = [];
  public fileConnect = [];
  public fileFrom: String;
  numFile: number;
  sum: any;
  progressBar: number;
  /**
   *  variable 'form' use FormGroup for manage form
  */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<P3FileDialogComponent>,
    private assignService: AssignService,
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.assignService.getSomeAssign(this.data.assignProjectCode).subscribe((results) => {
      this.assign = results;
      this.checkAssign();
    });
  }

  checkAssign() {
    this.assign.forEach(element => {
      element.value.assignFile.forEach(value => {
        if (value.fileMove === 'Part3') {
          this.fileFrom = element.value.assignEmpType;
          this.fileConnect.push({
            productCodeR: value.productCodeR,
            productFile: value.productFile,
            fileNum: value.fileNum,
            fileRecive: value.fileRecive,
            fileProgress: value.fileProgress
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
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
}
