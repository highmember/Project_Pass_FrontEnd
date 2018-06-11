import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
})

export class EditDialogComponent implements OnInit {
    /**
     *  variable 'form' use FormGroup for manage form
    */
  public matID: String;
  public nameMat: String;
  public stock: Number;
  public price: Number;
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<EditDialogComponent>,
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
      const value = [{
        matID: this.matID,
        nameMat: this.nameMat,
        stock: this.stock,
        price: this.price,
      }];
      this.dialogRef.close();
    }
  }
