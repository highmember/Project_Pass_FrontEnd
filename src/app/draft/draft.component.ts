import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DraftfileComponent } from './draft-file-dailog.component';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public rows: any[];
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.rows = [{
      projectCode: 32321312312,
      projectType: 'Mass',
      DraftProgress: 20,
      projectFile: 'dsadassd',
      customer: 'dsadsad',
      pm: 'dsadadasd'
    }];
}
upFile(): void {
  const dialogRef = this.dialog.open(DraftfileComponent, {
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


