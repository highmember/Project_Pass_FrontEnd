import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P1FileDialogComponent } from './p1-flie-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { DraftfileComponent } from '../draft/draft-file-dailog.component';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  public rows: any[];
  public rowss = [];
  public rowsss: any[];
  public id: String;
  public projectCodeOfEmp = [];
  public sleProjectCode = {
    _id: Object,
    assignProjectCode: ''
  };
  public assignProjectCode: String;
  public assignPMName: String;
  public assignFile: any[];
  public assignScopeEnd: Date;
  public assignScopeStart: Date;
  public assignProgress: Number;
  public dayDifference: Number;
  public timeSchedule: Number;
  public dayDifferenceBetCurr: Number;

  constructor(
    private dialog: MatDialog,
    private assignService: AssignService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.assignService.getId(this.id).subscribe((results) => {
      results.forEach((ele) => {
        this.projectCodeOfEmp.push({
          assignProjectCode: ele.assignProjectCode,
        });
      });
      this.rows = results;
    });
  }
  onUpdate(result, row) {
    row.forEach((item, index) => {
      this.assignService.updateAssign(row[index]._id, row[index])
        .mergeMap(() => this.assignService.getId(this.id))
        .subscribe((results) => {
          this.rows = results;
        });
    });
  }
  checkAssign() {
    this.rowss = [];
    this.rowsss = [];
    this.rows.forEach(ele => {
      if (ele.assignProjectCode === this.sleProjectCode.assignProjectCode) {
        this.assignPMName = ele.assignPMName;
        this.assignProjectCode = ele.assignProjectCode;
        this.assignScopeStart = ele.assignScopeStart;
        this.assignScopeEnd = ele.assignScopeEnd;
        this.assignProgress = ele.assignProgress;
        this.rowss.push(ele);
      }
    });
    this.rowsss = this.rowss;
    this.getschedule();
  }
  getschedule() {
    const today: number = Date.now();
    const date2 =  new Date(this.assignScopeEnd);
    const date1 = new Date(this.assignScopeStart);
    const currDate = Math.abs(date1.valueOf() - today) / 1000 / 60 / 60 / 24;
    const timeDifference = date2.valueOf() - date1.valueOf();
    const dayDifference = (timeDifference / 1000 / 60 / 60 / 24);
    const dayDifferenceBetCurr = (dayDifference - currDate);
    this.dayDifferenceBetCurr = dayDifferenceBetCurr;
    this.dayDifference = dayDifference;
    this.timeSchedule = ((currDate * 100) / dayDifference );
  }
viewFile(): void {
  const dialogRef = this.dialog.open(P1FileDialogComponent, {
    width: '1000px',
    data: {
      _id: this.rowss[0]._id,
      assignEmpType: this.rowss[0].assignEmpType,
      assignFile: this.rowss[0].assignFile,
      assignMat: this.rowss[0].assignMat,
      assignNote: this.rowss[0].assignNote,
      assignPMName: this.rowss[0].assignPMName,
      assignProgress: this.rowss[0].assignProgress,
      assignProjectCode: this.rowss[0].assignProjectCode,
      assignProject_id: this.rowss[0].assignProject_id,
      assignScopeEnd: this.rowss[0].assignScopeEnd,
      assignScopeStart: this.rowss[0].assignScopeStart
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
    }
  });
}

}

