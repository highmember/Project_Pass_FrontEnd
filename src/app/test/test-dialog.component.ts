import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html'
})

/**
 * manage about degree dialog insert, edit, delete data
 */
export class TestDialogComponent implements OnInit {
  /**
   *  variable 'form' use FormGroup for manage form
  */
 rows = {
    Code: Number,
    Name: String,
    Phone: Number
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TestDialogComponent>,
  ) { }
  /**
   * create from group and set data of degree
  */
  ngOnInit() {
    
  }
  
  add(Code, Name, Phone) {
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
  onSave(Code, Name, Phone) {
    if (Code&&Name&&Phone) {
      this.rows = {
        Code: Code,
        Name: Name,
        Phone: Phone
      }
    }
    this.dialogRef.close(this.rows);
  }

}
