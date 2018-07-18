import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignService } from '../../../shared/service/assign.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-viewpart1',
  templateUrl: './viewpart1.component.html',
  styleUrls: ['./viewpart1.component.css']
})
export class Viewpart1Component implements OnInit {
  public assign = [];
  public assignEmpName: String;
  public assignScopeStart: Data;
  public assignScopeEnd: Data;
  public assignFile = [];
  public assignFileNum = 1;
  public progressBar = 0;
  public progressBarr = 0;
  public numLen = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Viewpart1Component>,
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
    console.log(this.data);
    this.assign.forEach(element => {
      console.log(element);
      if (element.assignEmpType === 'Part1' && element.assignProject === this.data.project_id) {
        this.assignScopeStart = element.assignScopeStart;
        this.assignScopeEnd = element.assignScopeEnd;
        this.assignEmpName = element.assignEmpName;
        element.assignFile.forEach(value => {
          this.assignFile.push({
            productCodeR: value.productCodeR,
            productFile: value.productFile,
            fileNum: value.fileNum,
            fileRecive: value.fileRecive,
            fileProgress: value.fileProgress
          });
          this.progressBarr += value.fileProgress;
        });
        this.numLen += element.assignFile.length;
        console.log(this.numLen);
      }
    });
    this.progressBar = (this.progressBarr / this.numLen);
    this.assignFileNum = this.assignFile.length;
  }
}
