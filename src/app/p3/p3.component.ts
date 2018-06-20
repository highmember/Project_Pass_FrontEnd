import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P3DialogComponent } from './p3-dialog.component';
import { P3FileDialogComponent } from './p3-file-dialog.component';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component implements OnInit {
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
    const dialogRef = this.dialog.open(P3DialogComponent, {
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
    if (element.assignEmpType === 'Part3') {
      this.rowss.push(element);
      console.log(element)
    }
  });
  this.rowsss = this.rowss;
}
viewFile(): void {
  const dialogRef = this.dialog.open(P3FileDialogComponent, {
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

