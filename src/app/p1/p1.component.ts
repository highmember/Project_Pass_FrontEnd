import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P1DialogComponent } from './p1-dialog.component';
import { P1FileDialogComponent } from './p1-flie-dialog.component';
import { P1UpdateDialogComponent} from './p1-update.dialog.component';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  public rows: any[];
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.rows = [{
      projectCode: 32321312312,
      projectType: 'Mass',
      projectProgress: 0,
      projectFile: 'dsadassd',
      customer: 'dsadsad',
      pm: 'dsadadasd'
    }];
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
updateAssignProject(): void {
  const dialogRef = this.dialog.open(P1UpdateDialogComponent, {
    width: '1000px',
    data: {
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
      this.rows.push({
        doSuccess: result.doSuccess,
      });
      // this.degreeService.addDegree(result).pipe(
      //   mergeMap(() => this.degreeService.getAllDegree()))
      //   .subscribe((results) => {
      //     this.rows = results;
      //   });
    }
  });
}
}
