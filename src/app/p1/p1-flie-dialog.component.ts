import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-flie-p1-dialog',
    templateUrl: './p1-flie-dialog.component.html',
  })
  export class P1FileDialogComponent implements OnInit {
    /**
     *  variable 'form' use FormGroup for manage form
    */
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<P1FileDialogComponent>,
      private _formBuilder: FormBuilder
    ) { }
    /**
     * create from group and set data of sale
    */
    ngOnInit() {
    }
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
      this.dialogRef.close();
    }
}
