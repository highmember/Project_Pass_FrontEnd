import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssignPart1Component } from './assign-part1/assign-part1.component';
import { ActivatedRoute } from '@angular/router';
import { AssignService } from '../shared/service/assign.service';
import { mergeMap } from 'rxjs/operators';
import { ProjectService } from '../shared/service/project.service';
import { Location } from '@angular/common';
import { PmviewdetailComponent } from '../pmviewdetail/pmviewdetail.component';
import { ENGINE_METHOD_DIGESTS } from 'constants';


@Component({
  selector: 'app-pmcontrol',
  templateUrl: './pmcontrol.component.html',
  styleUrls: ['./pmcontrol.component.css']
})
export class PmcontrolComponent implements OnInit {
  public rows: any[];
  public assign: any[];
  public projectCode: Number;
  public project_id: string;
  public customer: String;
  public namePm: String;
  public projectStart: Date;
  public projectEnd: Date;
  public projProgress: Number;
  public tmp: any[];
  public projectProgressngx: any[];
  public projectProgress = 0;
  tiles = [
    { text: 'Draft', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part1', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part2', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part3', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part4', cols: 1, rows: 1, color: 'lightblue' }
  ];
  color = 'primary';
  mode = 'determinate';
  public dayDifference: Number;
  public timeSchedule: Number;
  public dayDifferenceBetCurr: Number;

  constructor(
    private dialog: MatDialog,
    private assignService: AssignService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getNext();
  }
  getNext(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getIdProject(id).subscribe((results) => {
      this.rows = results;
      this.getShow();
      this.getAssign();
    });
  }
  getShow() {
    this.rows.forEach(element => {
      this.projectStart = element.projectStart;
      this.projectEnd = element.projectEnd;
      this.project_id = element._id;
      this.projectCode = element.projectCode;
      this.customer = element.customer[0].customerName;
      this.namePm = element.pm[0].pmName;
      this.projProgress = element.projectProgress;
    });
  }

  getAssign() {
    this.assignService.getSomeAssign(this.projectCode).subscribe((results) => {
      this.tmp = results;
    });
    this.assignService.getProjectProgress(this.projectCode).subscribe((results2) => {
      this.projectProgressngx = results2;
      this.projectProgressngx.forEach(val => {
        this.projectProgress = val.value;
        this.updateProjectProgress();
      });
    });
  }
  updateProjectProgress() {
    this.projectService.updateProject(this.project_id, this.projectProgressngx).mergeMap(() =>
      this.projectService.getAllProject())
      .subscribe((results1) => {
        this.rows = results1;
      });
    this.getschedule();
  }

  goBack(): void {
    this.location.back();
  }

  getschedule() {
    const today: number = Date.now();
    const date2 =  new Date(this.projectEnd);
    const date1 = new Date(this.projectStart);
    const currDate = Math.abs(date1.valueOf() - today) / 1000 / 60 / 60 / 24;
    const timeDifference = date2.valueOf() - date1.valueOf();
    const dayDifference = (timeDifference / 1000 / 60 / 60 / 24);
    const dayDifferenceBetCurr = (dayDifference - currDate);
    this.dayDifferenceBetCurr = dayDifferenceBetCurr;
    this.dayDifference = dayDifference;
    this.timeSchedule = ((currDate * 100) / dayDifference );
  }
  // --------------------------------------------------------------------------------------------------------------
  editDraft(): void {
    if (this.tmp[0].ck === true) {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assign_id: this.tmp[0].value._id,
          assignProjectCode: this.tmp[0].value.assignProjectCode,
          assignProject_id: this.tmp[0].value.assignProject_id,
          assignPMName: this.tmp[0].value.assignPMName,
          assignEmpName: this.tmp[0].value.assignEmpName,
          assignFile: this.tmp[0].value.assignFile,
          assignScopeStart: this.tmp[0].value.assignScopeStart,
          assignScopeEnd: this.tmp[0].value.assignScopeEnd,
          assignMat: this.tmp[0].value.assignMat,
          assignProgress: this.tmp[0].value.assignProgress,
          assignNote: this.tmp[0].value.assignNote,
          assignEmpType: this.tmp[0].value.assignEmpType
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.updateAssign(this.tmp[0].value._id, result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    } else {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assignProjectCode: this.projectCode,
          assignProject_id: this.project_id,
          assignPMName: this.namePm,
          assignProgress: this.projProgress,
          assignEmpType: 'Draft',
          assignRound: 'First'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.addAssign(result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    }
  }
  viewDraft(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
        assign_id: this.tmp[0].value._id,
        assignProjectCode: this.tmp[0].value.assignProjectCode,
        assignProject_id: this.tmp[0].value.assignProject_id,
        assignPMName: this.tmp[0].value.assignPMName,
        assignEmpName: this.tmp[0].value.assignEmpName,
        assignFile: this.tmp[0].value.assignFile,
        assignScopeStart: this.tmp[0].value.assignScopeStart,
        assignScopeEnd: this.tmp[0].value.assignScopeEnd,
        assignMat: this.tmp[0].value.assignMat,
        assignProgress: this.tmp[0].value.assignProgress,
        assignNote: this.tmp[0].value.assignNote,
        assignEmpType: this.tmp[0].value.assignEmpType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

      }
    });
  }
  // tslint:disable-next-line:max-line-length
  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  editPart1(): void {
    if (this.tmp[1].ck === true) {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assign_id: this.tmp[1].value._id,
          assignProjectCode: this.tmp[1].value.assignProjectCode,
          assignProject_id: this.tmp[1].value.assignProject_id,
          assignPMName: this.tmp[1].value.assignPMName,
          assignEmpName: this.tmp[1].value.assignEmpName,
          assignFile: this.tmp[1].value.assignFile,
          assignScopeStart: this.tmp[1].value.assignScopeStart,
          assignScopeEnd: this.tmp[1].value.assignScopeEnd,
          assignMat: this.tmp[1].value.assignMat,
          assignProgress: this.tmp[1].value.assignProgress,
          assignNote: this.tmp[1].value.assignNote,
          assignEmpType: this.tmp[1].value.assignEmpType
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.updateAssign(this.tmp[1].value._id, result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    } else {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assignProjectCode: this.projectCode,
          assignProject_id: this.project_id,
          assignPMName: this.namePm,
          assignProgress: this.projProgress,
          assignEmpType: 'Part1',
          assignRound: 'First'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.addAssign(result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------
  viewPart1() {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
        assign_id: this.tmp[1].value._id,
        assignProjectCode: this.tmp[1].value.assignProjectCode,
        assignProject_id: this.tmp[1].value.assignProject_id,
        assignPMName: this.tmp[1].value.assignPMName,
        assignEmpName: this.tmp[1].value.assignEmpName,
        assignFile: this.tmp[1].value.assignFile,
        assignScopeStart: this.tmp[1].value.assignScopeStart,
        assignScopeEnd: this.tmp[1].value.assignScopeEnd,
        assignMat: this.tmp[1].value.assignMat,
        assignProgress: this.tmp[1].value.assignProgress,
        assignNote: this.tmp[1].value.assignNote,
        assignEmpType: this.tmp[1].value.assignEmpType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

      }
    });
  }
  // ---------------------------------------------------------------------------------------------------------------------
  editPart2(): void {
    if (this.tmp[2].ck === true) {
      // tslint:disable-next-line:no-shadowed-variable
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assign_id: this.tmp[2].value._id,
          assignProjectCode: this.tmp[2].value.assignProjectCode,
          assignProject_id: this.tmp[2].value.assignProject_id,
          assignPMName: this.tmp[2].value.assignPMName,
          assignEmpName: this.tmp[2].value.assignEmpName,
          assignFile: this.tmp[2].value.assignFile,
          assignScopeStart: this.tmp[2].value.assignScopeStart,
          assignScopeEnd: this.tmp[2].value.assignScopeEnd,
          assignMat: this.tmp[2].value.assignMat,
          assignProgress: this.tmp[2].value.assignProgress,
          assignNote: this.tmp[2].value.assignNote,
          assignEmpType: this.tmp[2].value.assignEmpType
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.updateAssign(this.tmp[2].value._id, result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    } else {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assignProjectCode: this.projectCode,
          assignProject_id: this.project_id,
          assignPMName: this.namePm,
          assignProgress: this.projProgress,
          assignEmpType: 'Part2',
          assignRound: 'First'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.addAssign(result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------
  viewPart2() {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
        assign_id: this.tmp[2].value._id,
        assignProjectCode: this.tmp[2].value.assignProjectCode,
        assignProject_id: this.tmp[2].value.assignProject_id,
        assignPMName: this.tmp[2].value.assignPMName,
        assignEmpName: this.tmp[2].value.assignEmpName,
        assignFile: this.tmp[2].value.assignFile,
        assignScopeStart: this.tmp[2].value.assignScopeStart,
        assignScopeEnd: this.tmp[2].value.assignScopeEnd,
        assignMat: this.tmp[2].value.assignMat,
        assignProgress: this.tmp[2].value.assignProgress,
        assignNote: this.tmp[2].value.assignNote,
        assignEmpType: this.tmp[2].value.assignEmpType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }
  // -----------------------------------------------------------------------------------------------------------------------------
  viewPart3() {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
        assign_id: this.tmp[3].value._id,
        assignProjectCode: this.tmp[3].value.assignProjectCode,
        assignProject_id: this.tmp[3].value.assignProject_id,
        assignPMName: this.tmp[3].value.assignPMName,
        assignEmpName: this.tmp[3].value.assignEmpName,
        assignFile: this.tmp[3].value.assignFile,
        assignScopeStart: this.tmp[3].value.assignScopeStart,
        assignScopeEnd: this.tmp[3].value.assignScopeEnd,
        assignMat: this.tmp[3].value.assignMat,
        assignProgress: this.tmp[3].value.assignProgress,
        assignNote: this.tmp[3].value.assignNote,
        assignEmpType: this.tmp[3].value.assignEmpType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }
  // -----------------------------------------------------------------------------------------------------------------------------
  editPart3(): void {
    if (this.tmp[3].ck === true) {
      // tslint:disable-next-line:no-shadowed-variable
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assign_id: this.tmp[3].value._id,
          assignProjectCode: this.tmp[3].value.assignProjectCode,
          assignProject_id: this.tmp[3].value.assignProject_id,
          assignPMName: this.tmp[3].value.assignPMName,
          assignEmpName: this.tmp[3].value.assignEmpName,
          assignFile: this.tmp[3].value.assignFile,
          assignScopeStart: this.tmp[3].value.assignScopeStart,
          assignScopeEnd: this.tmp[3].value.assignScopeEnd,
          assignMat: this.tmp[3].value.assignMat,
          assignProgress: this.tmp[3].value.assignProgress,
          assignNote: this.tmp[3].value.assignNote,
          assignEmpType: this.tmp[3].value.assignEmpType
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.updateAssign(this.tmp[3].value._id, result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    } else {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assignProjectCode: this.projectCode,
          assignProject_id: this.project_id,
          assignPMName: this.namePm,
          assignProgress: this.projProgress,
          assignEmpType: 'Part3',
          assignRound: 'First'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.addAssign(result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------
  viewPart4() {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
        assign_id: this.tmp[4].value._id,
        assignProjectCode: this.tmp[4].value.assignProjectCode,
        assignProject_id: this.tmp[4].value.assignProject_id,
        assignPMName: this.tmp[4].value.assignPMName,
        assignEmpName: this.tmp[4].value.assignEmpName,
        assignFile: this.tmp[4].value.assignFile,
        assignScopeStart: this.tmp[4].value.assignScopeStart,
        assignScopeEnd: this.tmp[4].value.assignScopeEnd,
        assignMat: this.tmp[4].value.assignMat,
        assignProgress: this.tmp[4].value.assignProgress,
        assignNote: this.tmp[4].value.assignNote,
        assignEmpType: this.tmp[4].value.assignEmpType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }
  // -----------------------------------------------------------------------------------------------------------------------------
  editPart4(): void {
    if (this.tmp[4].ck === true) {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assign_id: this.tmp[4].value._id,
          assignProjectCode: this.tmp[4].value.assignProjectCode,
          assignProject_id: this.tmp[4].value.assignProject_id,
          assignPMName: this.tmp[4].value.assignPMName,
          assignEmpName: this.tmp[4].value.assignEmpName,
          assignFile: this.tmp[4].value.assignFile,
          assignScopeStart: this.tmp[4].value.assignScopeStart,
          assignScopeEnd: this.tmp[4].value.assignScopeEnd,
          assignMat: this.tmp[4].value.assignMat,
          assignProgress: this.tmp[4].value.assignProgress,
          assignNote: this.tmp[4].value.assignNote,
          assignEmpType: this.tmp[4].value.assignEmpType
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.updateAssign(this.tmp[4].value._id, result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    } else {
      const dialogRef = this.dialog.open(AssignPart1Component, {
        width: '1000px',
        data: {
          assignProjectCode: this.projectCode,
          assignProject_id: this.project_id,
          assignPMName: this.namePm,
          assignProgress: this.projProgress,
          assignEmpType: 'Part4',
          assignRound: 'First'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.assignService.addAssign(result).pipe(
            mergeMap(() => this.assignService.getAllAssign()))
            .subscribe((results) => {
              this.assign = results;
            });
        }
      });
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------
}
