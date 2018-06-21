import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignService } from '../../../shared/service/assign.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-viewpart3',
  templateUrl: './viewpart3.component.html',
  styleUrls: ['./viewpart3.component.css']
})
export class Viewpart3Component implements OnInit {

  public assign = [];
  public assignEmpName: String;
  public assignScopeStart: Data;
  public assignScopeEnd: Data;
  public assignFile = [];
  public assignFileNum = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Viewpart3Component>,
    private _formBuilder: FormBuilder,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.assignService.getAllAssign().subscribe((results) => {
      this.assign = results;
      this.checkAssign();
    });
  }

  checkAssign() {
    this.assign.forEach(element => {
      if (element.assignEmpType === 'Part3') {
        this.assignScopeStart = element.assignScopeStart;
        this.assignScopeEnd = element.assignScopeEnd;
        this.assignEmpName = element.assignEmpName;
        element.assignFile.forEach(value => {
          this.assignFile.push({
            productCodeR: value.productCodeR,
            productCode: value.productCode,
            fileNum: value.fileNum
          });
          console.log(this.assignFile);

        });
      }
    });
    this.assignFileNum = this.assignFile.length;
    console.log(this.assign);
  }
}
