import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P1DialogComponent } from './p1-dialog.component';
import { P1FileDialogComponent } from './p1-flie-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  public rows = [];
  public rowss = [];
  public rowsss: any[];
  constructor(
    private dialog: MatDialog,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.assignService.getAllAssign().subscribe((results) => {
      console.log(results)
      this.rows = results;
      this.checkAssign();
    });
  }
  detailAssignProject(): void {
    const dialogRef = this.dialog.open(P1DialogComponent, {
      width: '1000px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.rows.push({
          projectCode: result.projectCode,
          projectType: result.projectType,
          productCode: result.productCode,
          projectProgress: 0,
          projectFile: result.projectFile,
          customer: result.customer.customerName,
          pm: result.pm
        });
        // this.degreeService.addDegree(result).pipe(
        //   mergeMap(() => this.degreeService.getAllDegree()))
        //   .subscribe((results) => {
        //     this.rows = results;
        //   });
      }
    });
}
checkAssign() {
  this.rows.forEach(element => {
    if (element.assignEmpType === 'Part1') {
      this.rowss.push(element);
    }
  });
  this.rowsss = this.rowss;
}

viewFile(): void {
  const dialogRef = this.dialog.open(P1FileDialogComponent, {
    width: '1000px',
    data: {
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
      // this.degreeService.addDegree(result).pipe(
      //   mergeMap(() => this.degreeService.getAllDegree()))
      //   .subscribe((results) => {
      //     this.rows = results;
      //   });
    }
  });
}

}
