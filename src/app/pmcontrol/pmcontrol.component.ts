import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDraftComponent } from './dialog-draft.component';
import { AssignPart1Component } from './assign-part1/assign-part1.component';
import { AssignPart2Component } from './assign-part2/assign-part2.component';
import { AssignPart3Component } from './assign-part3/assign-part3.component';
import { AssignPart4Component } from './assign-part4/assign-part4.component';
import { ActivatedRoute } from '@angular/router';
import { AssignService } from '../shared/service/assign.service';
import { mergeMap } from 'rxjs/operators';
import { ProjectService } from '../shared/service/project.service';
import { Location } from '@angular/common';
import { Viewpart1Component } from './pmview/viewpart1/viewpart1.component';
import { Viewpart2Component } from './pmview/viewpart2/viewpart2.component';
import { Viewpart3Component } from './pmview/viewpart3/viewpart3.component';
import { Viewpart4Component } from './pmview/viewpart4/viewpart4.component';
import { ViewdraftComponent } from './pmview/viewdraft/viewdraft.component';

@Component({
  selector: 'app-pmcontrol',
  templateUrl: './pmcontrol.component.html',
  styleUrls: ['./pmcontrol.component.css']
})
export class PmcontrolComponent implements OnInit {
  public rows: any[];
  public assign: any[];
  public projectCode: Number;
  public customer: String;
  public namePm: String;
  public projProgress: Number;
  public programsId;
  tiles = [
    { text: 'Draft', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part1', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part2', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part3', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Part4', cols: 1, rows: 1, color: 'lightblue' }
  ];
  color = 'primary';
  mode = 'determinate';
  value = 100;
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
    // console.log(this.rowss);
  }
  getNext(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // const cus = +this.route.snapshot.paramMap.get('customer');
    this.projectService.getIdProject(id).subscribe((results) => {
      this.rows = results;
      console.log(results);
      this.projectCode = results.projectCode;
      this.customer = results.customer;
      this.namePm = results.pm;
      this.projProgress = results.projectProgress;
    });
    // console.log(cus);
    // console.log(Object.keys(id));
  }
  goBack(): void {
    this.location.back();
  }
// tslint:disable-next-line:max-line-length
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  editDraft(): void {
    const dialogRef = this.dialog.open(DialogDraftComponent, {
      width: '1000px',
      data: {
        projectCode: this.projectCode,
        namePm: this.namePm,
        projProgress: this.projProgress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.assignService.addAssign(result).pipe(
          mergeMap(() => this.assignService.getAllAssign()))
          .subscribe((results) => {
            this.assign = results;
            this.projectService.updateProject(result.assignProject, this.assign[this.assign.length - 1]).mergeMap(() =>
              this.projectService.getAllProject())
              .subscribe((results1) => {
                this.rows = results1;
              });
          });
      }
    });
  }
  viewDraft(row): void {
    const dialogRef = this.dialog.open(ViewdraftComponent, {
      width: '1000px',
      data: {
        assignProject: row.assignProject,
        assignPMName: row.assignPMName,
        assignEmpName: row.assignEmpName,
        assignFile: row.assignFile,
        assignScopeStart: row.assignScopeStart,
        assignScopeEnd: row.assignScopeEnd,
        assignMat: row.assignMat,
        assignProgress: row.assignProgress,
        assignNote: row.assignNote,
        assignEmpType: row.assignEmpType,
      }
    });
    console.log(row);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

      }
    });
  }
// tslint:disable-next-line:max-line-length
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  editPart1(): void {
    const dialogRef = this.dialog.open(AssignPart1Component, {
      width: '1000px',
      data: {
        projectCode: this.projectCode,
        namePm: this.namePm,
        projProgress: this.projProgress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.assignService.addAssign(result).pipe(
          mergeMap(() => this.assignService.getAllAssign()))
          .subscribe((results) => {
            this.assign = results;
            this.projectService.updateProject(result.assignProject, this.assign[this.assign.length - 1]).mergeMap(() =>
              this.projectService.getAllProject())
              .subscribe((results1) => {
                this.rows = results1;
              });
          });
      }
    });
  }
  // ---------------------------------------------------------------------------------------------------------------------
  viewPart1(row) {
    const dialogRef = this.dialog.open(Viewpart1Component, {
      width: '1000px',
      data: {
        assignProject: row.assignProject,
        assignPMName: row.assignPMName,
        assignEmpName: row.assignEmpName,
        assignFile: row.assignFile,
        assignScopeStart: row.assignScopeStart,
        assignScopeEnd: row.assignScopeEnd,
        assignMat: row.assignMat,
        assignProgress: row.assignProgress,
        assignNote: row.assignNote,
        assignEmpType: row.assignEmpType,
      }
    });
    console.log(row);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {

      }
    });
  }
    // ---------------------------------------------------------------------------------------------------------------------
  editPart2(): void {
    const dialogRef = this.dialog.open(AssignPart2Component, {
      width: '1000px',
      data: {
        project: this.rows
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.assignService.addAssign(result).pipe(
          mergeMap(() => this.assignService.getAllAssign()))
          .subscribe((results) => {
            this.assign = results;
            this.projectService.updateProject(result.assignProject, this.assign[this.assign.length - 1]).mergeMap(() =>
              this.projectService.getAllProject())
              .subscribe((results1) => {
                this.rows = results1;
              });
          });
      }
    });
  }
    // ---------------------------------------------------------------------------------------------------------------------
    viewPart2(row) {
      const dialogRef = this.dialog.open(Viewpart2Component, {
        width: '1000px',
        data: {
          assignProject: row.assignProject,
          assignPMName: row.assignPMName,
          assignEmpName: row.assignEmpName,
          assignFile: row.assignFile,
          assignScopeStart: row.assignScopeStart,
          assignScopeEnd: row.assignScopeEnd,
          assignMat: row.assignMat,
          assignProgress: row.assignProgress,
          assignNote: row.assignNote,
          assignEmpType: row.assignEmpType,
        }
      });
      console.log(row);
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
        }
      });
    }
    // -----------------------------------------------------------------------------------------------------------------------------
    viewPart3(row) {
      const dialogRef = this.dialog.open(Viewpart3Component, {
        width: '1000px',
        data: {
          assignProject: row.assignProject,
          assignPMName: row.assignPMName,
          assignEmpName: row.assignEmpName,
          assignFile: row.assignFile,
          assignScopeStart: row.assignScopeStart,
          assignScopeEnd: row.assignScopeEnd,
          assignMat: row.assignMat,
          assignProgress: row.assignProgress,
          assignNote: row.assignNote,
          assignEmpType: row.assignEmpType,
        }
      });
      console.log(row);
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
        }
      });
    }
    // -----------------------------------------------------------------------------------------------------------------------------
  editPart3(): void {
    const dialogRef = this.dialog.open(AssignPart3Component, {
      width: '1000px',
      data: {
        project: this.rows
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.assignService.addAssign(result).pipe(
          mergeMap(() => this.assignService.getAllAssign()))
          .subscribe((results) => {
            this.assign = results;
            this.projectService.updateProject(result.assignProject, this.assign[this.assign.length - 1]).mergeMap(() =>
              this.projectService.getAllProject())
              .subscribe((results1) => {
                this.rows = results1;
              });
          });
      }
    });
  }
    // ---------------------------------------------------------------------------------------------------------------------
    viewPart4(row) {
      const dialogRef = this.dialog.open(Viewpart4Component, {
        width: '1000px',
        data: {
          assignProject: row.assignProject,
          assignPMName: row.assignPMName,
          assignEmpName: row.assignEmpName,
          assignFile: row.assignFile,
          assignScopeStart: row.assignScopeStart,
          assignScopeEnd: row.assignScopeEnd,
          assignMat: row.assignMat,
          assignProgress: row.assignProgress,
          assignNote: row.assignNote,
          assignEmpType: row.assignEmpType,
        }
      });
      console.log(row);
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
        }
      });
    }
    // -----------------------------------------------------------------------------------------------------------------------------
  editPart4(): void {
    const dialogRef = this.dialog.open(AssignPart4Component, {
      width: '1000px',
      data: {
        project: this.rows
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.assignService.addAssign(result).pipe(
          mergeMap(() => this.assignService.getAllAssign()))
          .subscribe((results) => {
            this.assign = results;
            this.projectService.updateProject(result.assignProject, this.assign[this.assign.length - 1]).mergeMap(() =>
              this.projectService.getAllProject())
              .subscribe((results1) => {
                this.rows = results1;
              });
          });
      }
    });
  }
    // ---------------------------------------------------------------------------------------------------------------------
}
