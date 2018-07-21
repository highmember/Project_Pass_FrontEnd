import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignService } from '../shared/service/assign.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-pmviewdetail',
  templateUrl: './pmviewdetail.component.html',
  styleUrls: ['./pmviewdetail.component.css']
})
export class PmviewdetailComponent implements OnInit {
  public assignEmpName: String;
  public assignScopeStart: Data;
  public assignScopeEnd: Data;
  public assignFile = [];
  public assignMat = [];
  public assignFileNum = 0;
  public assignMatNum = 0;
  public assignBarProgress = 0 ;
  public sumProgress = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.assignFile = this.data.assignFile;
    this.assignMat = this.data.assignMat;
    this.assignScopeStart = this.data.assignScopeStart;
    this.assignScopeEnd = this.data.assignScopeEnd;
    this.assignEmpName = this.data.assignEmpName;
    this.assignFileNum = this.assignFile.length;
    this.assignMatNum = this.assignMat.length;
    this.assignFile.forEach(ele => {
      this.sumProgress += ele.fileProgress;
    });
    this.assignBarProgress = this.sumProgress / this.assignFileNum;
  }

}
