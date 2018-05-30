import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-draft-file-dailog',
  templateUrl: './draft-file-dailog.component.html',
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class DraftfileComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DraftfileComponent>,
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
