import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-file-sale-dialog',
  templateUrl: './sale-file-dialog.component.html',
  styleUrls: ['./sale-file-dialog.component.css']
})

/**
 * manage about sale dialog insert, edit, delete data
 */
export class SaleFileDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
  public codeProject: String;
  public file: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SaleFileDialogComponent>,
  ) { }
  /**
   * create from group and set data of sale
  */
  ngOnInit() {
    this.file = this.data.file;
    this.codeProject = this.file[0].codeProject;
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
