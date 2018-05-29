import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-p1-update.dialog.component',
    templateUrl: './p1-update.dialog.component.html',

  })
  export class P1UpdateDialogComponent implements OnInit {
    public assign: any[];
    /**
     *  variable 'form' use FormGroup for manage form
    */
    public formUpdate: FormGroup;
    public pmName: String;
    public code: String;
    public file = '-';
      // deadline:10-05-2018,
    public doSuccess: Number;
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<P1UpdateDialogComponent>,
      private _formBuilder: FormBuilder
    ) { }
    /**
     * create from group and set data of sale
    */
    ngOnInit() {
        this.formUpdate = this.formBuilder.group({});
        this.assign = [{
            goalTarget: 20,
            assignProgress: 0,
            // de line:10-05-2018,
            placeAssign: 'Part1',
            noteAssign: 'Note',
            productName: 'เหล็กกันชน',
          }];
    }
     updateAssignProject() {
      this.doSuccess = this.formUpdate.value.doSuccess;
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
      const value = [{
        doSuccess: this.doSuccess,
      }];
      this.dialogRef.close(value);
    }
  }
