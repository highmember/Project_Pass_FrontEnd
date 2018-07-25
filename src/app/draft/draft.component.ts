import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DraftfileComponent } from './draft-file-dailog.component';
import { AssignService } from '../shared/service/assign.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  public rows: any[];
  public rowss = [];
  public rowsss: any[];
  public id: String;
  constructor(
    private dialog: MatDialog,
    private assignService: AssignService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.assignService.getId(this.id).subscribe((results) => {
      console.log(results)
      this.rows = results;
      this.checkAssign();
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
    this.rows.forEach(element => {
      if (element.assignEmpType === 'Draft') {
        this.rowss.push(element);
      }
    });
    this.rowsss = this.rowss;
  }

viewFile(val): void {
  const dialogRef = this.dialog.open(DraftfileComponent, {
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
