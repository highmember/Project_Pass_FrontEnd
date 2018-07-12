import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P4FileDialogComponent } from './p4-file-dialog.component';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {
  public rows: any[];
  public rowss = [];
  public rowsss: any[];
  constructor(
    private dialog: MatDialog,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.assignService.getAllAssign().subscribe((results) => {
      this.rows = results;
      this.checkAssign();
    });
  }
  onUpdate(result, row) {
    this.assignService.updateAssign(row[0]._id, row[0])
    .mergeMap(() => this.assignService.getAllAssign())
      .subscribe((results) => {
        this.rows = results;
        });
  }
  checkAssign() {
    this.rows.forEach(element => {
      if (element.assignEmpType === 'Part4') {
        this.rowss.push(element);
      }
    });
    this.rowsss = this.rowss;
  }

viewFile(): void {
  const dialogRef = this.dialog.open(P4FileDialogComponent, {
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
