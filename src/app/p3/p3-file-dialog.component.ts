import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-file-p3-dialog',
  templateUrl: './p3-file-dialog.component.html',
})
export class P3FileDialogComponent implements OnInit {
  public file: any[];
  public form: FormGroup;
  /**
   *  variable 'form' use FormGroup for manage form
  */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<P3FileDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.file = [{
      productFileName: 'File001',
      productFileName2: 'File002',
      productFileName3: 'File003',
      productFileName4: 'File004'
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
