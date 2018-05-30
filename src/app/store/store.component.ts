import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog.component';
import { ViewdialogComponent } from './view-dialog.component';
import { MatDialogComponent } from './material-dialog.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public rows: any[];
  public datamat: any[];
  public matback: any[];
  public customer: any[];
  public customerName: String;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.rows = [{
      matID: 32321312312,
      nameMat: 'Mass',
      stock: 0,
      price: 20,
      Edit: 'dsadassd',
    }];
    this.datamat = [{
      projectCode: 32321312312,
      pm: 'Mass',
      Amount: 25,
      status: 'ว่าง',
      Day_Request: 0,
    }];
    this.matback = [{
     backID: 32321312312,
     matID: '32321312312',
     nameMat: 'Mass',
     Amount: 25,
     Day_Back: 0,
    }];
  }
  EditMat(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
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
  insertMaterial(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
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
  viewreq(): void {
    const dialogRef = this.dialog.open(ViewdialogComponent, {
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
