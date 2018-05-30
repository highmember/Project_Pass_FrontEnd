import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class ViewdialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */public request: any[];
  public Back: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ViewdialogComponent>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.request = [{
        reqID: 32321312312,
        productID: 54156,
        matID: 54156,
        nameMat: 'Mass',
        reqAmount: 20,
        Day_req: 0,
      }];
      this.Back = [{
        takeID: 32321312312,
        productID: 54156,
        nameMat: 'Mass',
        reqAmount: 20,
        numTake: 0,
      }];
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
