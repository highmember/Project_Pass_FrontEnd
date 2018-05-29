import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDraftComponent } from './dialog-draft.component';
import { Part1Component } from './part1/part1.component';
import { AssignPast2Component } from './assign-past2/assign-past2.component';
import { AssignPast3Component } from './assign-past3/assign-past3.component';
import { AssignPast4Component } from './assign-past4/assign-past4.component';


@Component({
  selector: 'app-pmcontrol',
  templateUrl: './pmcontrol.component.html',
  styleUrls: ['./pmcontrol.component.css']
})
export class PmcontrolComponent implements OnInit {
  public rows: any[];
  public projectCode: String;
  public customer: String;
  tiles = [
    {text: 'Draft', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Part1', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Part2', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Part3', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Part4', cols: 1, rows: 1, color: 'lightblue'}
  ];
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.projectCode = '32321312312';
    this.customer = 'Mr..... ......';
    this.rows = [{
      projectCode : '32321312312',
      projectType: 'Mass',
      projectProgress: 0,
      projectFile: 'dsadassd',
      customer: 'dsadsad',
      pm: 'dsadadasd'
    }];
  }
 editDraft(): void {
    const dialogRef = this.dialog.open(DialogDraftComponent, {
      width: '1000px',
      data: {
      }
    });
 }
 editPart1(): void {
  const dialogRef = this.dialog.open(Part1Component, {
    width: '1000px',
    data: {
    }
  });
}
 editPart2(): void {
  const dialogRef = this.dialog.open(AssignPast2Component, {
    width: '1000px',
    data: {
    }
  });
}
editPart3(): void {
  const dialogRef = this.dialog.open(AssignPast3Component, {
    width: '1000px',
    data: {
    }
  });
}
editPart4(): void {
  const dialogRef = this.dialog.open(AssignPast4Component, {
    width: '1000px',
    data: {
    }
  });
}
}
