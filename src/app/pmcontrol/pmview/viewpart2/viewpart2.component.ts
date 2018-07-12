import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignService } from '../../../shared/service/assign.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-viewpart2',
  templateUrl: './viewpart2.component.html',
  styleUrls: ['./viewpart2.component.css']
})
export class Viewpart2Component implements OnInit {
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
    private dialogRef: MatDialogRef<Viewpart2Component>,
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
      if (element.assignEmpType === 'Part2' && element.assignProject === this.data.project_id) {
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
        this.numLen = element.assignFile.length;
      }
    });
    this.progressBar = (this.progressBarr / this.numLen);
    this.assignFileNum = this.assignFile.length;
  }
}
