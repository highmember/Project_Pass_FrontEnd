import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { P2FileDialogComponent } from './p2-flie-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
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
    row.forEach((item, index) => {
      this.assignService.updateAssign(row[index]._id, row[index])
        .mergeMap(() => this.assignService.getAllAssign())
        .subscribe((results) => {
          this.rows = results;
        });
    });
  }
  checkAssign() {
    this.rows.forEach(element => {
      if (element.assignEmpType === 'Part2') {
        this.rowss.push(element);
      }
    });
    this.rowsss = this.rowss;
  }

viewFile(val): void {
  const dialogRef = this.dialog.open(P2FileDialogComponent, {
    width: '1000px',
    data: {
      assignEmpType: val.assignEmpType,
      assignFile: val.assignFile,
      assignMat: val.assignMat,
      assignNote: val.assignNote,
      assignPMName: val.assignPMName,
      assignProgress: val.assignProgress,
      assignProjectCode: val.assignProjectCode,
      assignProject_id: val.assignProject_id,
      assignScopeEnd: val.assignScopeEnd,
      assignScopeStart: val.assignScopeStart
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
