import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDraftComponent } from './dialog-draft.component';
import { Part1Component } from './part1/part1.component';

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
}
