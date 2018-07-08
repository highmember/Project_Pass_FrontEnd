import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-p1-dialog',
    templateUrl: './p1-dialog.component.html',
    styleUrls: ['./p1-dialog.component.css']
  })
  export class P1DialogComponent implements OnInit {
    public assign: any[];
    public assignn: any[];
    /**
     *  variable 'form' use FormGroup for manage form
    */
      // deadline:10-05-2018,
    public form: FormGroup;
    public fileRecive: Number;
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<P1DialogComponent>,
      private _formBuilder: FormBuilder
    ) { }
    /**
     * create from group and set data of sale
    */
    ngOnInit() {
      console.log(this.data.fileName)
      this.form = this.formBuilder.group({});
      // console.log(this.assign)
      this.data.fileName.forEach(ele => {
        console.log(ele.productCodeR)
        this.assign = [{
          productCodeR: ele.productCodeR,
          productFile: ele.productFile,
          fileNum: ele.fileNum,
          fileRecive: ele.fileRecive
        }]
        console.log(this.assign)
      });
      console.log(this.assign)
      console.log(Object.values(this.assign))
    }
    // updateAssignProject() {
    //   this.doSuccess = this.formUpdate.value.doSuccess;
    // }
    /**
     * set value in close() for return
     */
    onClose() {
      this.dialogRef.close(/*sent value to tab-supervision*/);
    }
    /**
     * save value in variable and return
     */
    onSave() {
      const value = {
        fileRecive: this.fileRecive,
      };
      console.log(value);
      this.dialogRef.close(value);
    }
    onUpdate() {
      console.log(this.fileRecive)
      // this.assign = [{
      //   fileRecive: this.fileRecive,
      //   }];
    // console.log(this.assign)
      // this.assign.forEach(element => {
      //   console.log(element);
      //     // console.log(this.rowss);
      // });
    }
  }
