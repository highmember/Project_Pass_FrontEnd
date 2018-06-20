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
    /**
     *  variable 'form' use FormGroup for manage form
    */
      // deadline:10-05-2018,
      public form: FormGroup;
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
      this.form = this.formBuilder.group({});
        this.assign = [{
            goalTarget: 20,
            doSuccess: 10,
            assignProgress: 0,
            // deadline: 10-05-2018,
            placeAssign: 'Part1',
            noteAssign: 'Note',
            productName: 'เหล็กกันชน',
            productFileName: 'File001',
          }];
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
      const value = this.form.value;
      this.dialogRef.close(value);
    }
  }
