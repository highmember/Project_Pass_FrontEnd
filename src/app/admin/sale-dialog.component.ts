import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class AdminSaleDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AdminSaleDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
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
    const value = this.form.value;
    this.dialogRef.close(value);
  }

}
