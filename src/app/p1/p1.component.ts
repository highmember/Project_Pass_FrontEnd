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
        this.rowss.push(ele);
      }
    });
    this.rowsss = this.rowss;
  }
viewFile(val): void {
  const dialogRef = this.dialog.open(DraftfileComponent, {
    width: '1000px',
    data: {
      _id: val._id,
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
    }
  });
}

}

