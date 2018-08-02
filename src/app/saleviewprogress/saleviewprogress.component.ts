import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignService } from '../shared/service/assign.service';
import { ProjectService } from '../shared/service/project.service';
import { PmviewdetailComponent } from '../pmviewdetail/pmviewdetail.component';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-saleviewprogress',
  templateUrl: './saleviewprogress.component.html',
  styleUrls: ['./saleviewprogress.component.css']
})
export class SaleviewprogressComponent implements OnInit {
  public rows: any[];
  public assign: any[];
  public projectCode: Number;
  public project_id: String;
  public customer: String;
  public namePm: String;
  public projProgress: Number;
  public tmp: any[];
  public projectProgressngx: any[];
  public projectProgress = 0;
  public projectStart: Date;
  public projectEnd: Date;

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
    private route: ActivatedRoute,
    private assignService: AssignService,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getIdProject(id).subscribe((results) => {
      this.project_id = results[0]._id;
      this.projectCode = results[0].projectCode;
      this.customer = results[0].customer[0].customerName;
      this.namePm = results[0].pm;
      this.projProgress = results[0].projectProgress;
      this.projectStart = results[0].projectStart;
      this.projectEnd = results[0].projectEnd;
      this.getAssign();
    });
  }
  getAssign() {
    this.assignService.getSomeAssign(this.projectCode).subscribe((results) => {
      this.tmp = results;
      console.log(this.tmp)
    });
    this.assignService.getProjectProgress(this.projectCode).subscribe((results2) => {
      this.projectProgressngx = results2;
      this.projectProgressngx.forEach(val => {
        this.projectProgress = val;
      });
    });
  }
  goBack(): void {
    this.location.back();
  }
  viewDraft(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
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
  viewPart1(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
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
  viewPart2(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
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
  viewPart3(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
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
  viewPart4(): void {
    const dialogRef = this.dialog.open(PmviewdetailComponent, {
      width: '1000px',
      data: {
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

}


