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
  public fileFrom: String;
  public sum = 0;
  public progressBar = 0;
  public numFile = 0;
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
    this.assignService.getSomeAssign(this.data.assignProjectCode).subscribe((results) => {
      this.assign = results;
      this.checkAssign();
    });
  }

  checkAssign() {
    this.assign.forEach(element => {
      element.value.assignFile.forEach(value => {
        if (value.fileMove === 'Draft') {
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

  /**
   * set value in close() for return
   */
  onClose() {
    this.dialogRef.close(/*sent value to tab-supervision*/);
  }
}
