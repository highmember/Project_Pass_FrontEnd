import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})

/**
 * manage about User dialog insert, edit, delete data
 */
export class AdminUserDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public form: FormGroup;
  public username: string;
  public password: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AdminUserDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of User
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
    const value = {
      username: this.form.value.username,
      password: this.form.value.password,
      data: this.data
    };
    this.dialogRef.close(value);
  }

}
