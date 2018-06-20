import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewdialogComponent } from './view-dialog.component';
import { MatDialogComponent } from './material-dialog.component';
import { StoreService } from '../shared/service/store.service';
import { mergeMap } from 'rxjs/operators';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public temp: any[];
  public temp2: any[];
  public rows = [];
  public temp3: any[];
  public row3 = [];
  public datamat: any[];
  public matback: any[];
  public customer: any[];
  public customerName: String;
  public rowss: any[];
  constructor(
    private dialog: MatDialog,
    private storeService: StoreService,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.storeService.getAllStore().subscribe((results) => {
      this.temp = results;
      console.log(this.temp);
      this.check();
    });
    this.assignService.getAllAssign().subscribe((results2) => {
      this.temp2 = results2;
       console.log(this.temp2);
      this.checkas();
    });
  }
  check() {
    this.temp.forEach(element => {
      if (element.materialName !== 'อื่นๆ') {
        this.rows.push(element);
      }
    });
     this.rowss = this.rows;
  }
  checkas() {
    this.temp2.forEach(element => {
      if (element.materialName !== 'อื่นๆ') {
        this.rows.push(element);
      }
    });
  }
  editMaterial(row): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: {
        materialId: row.materialId,
        materialName: row.materialName,
        materialNum: row.materialNum,
        materialUnit: row.materialUnit,
        materialPrice: row.materialPrice
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.storeService.updateStore(row._id, result).pipe(
          mergeMap(() => this.storeService.getAllStore()))
          .subscribe((results) => {
            this.rows = results;
          });
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
        this.storeService.addStore(result).pipe(
          mergeMap(() => this.storeService.getAllStore()))
          .subscribe((results) => {
            this.rows = results;
          });
      }
    });
  }
  confirmMatDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.storeService.deleteStore(row._id).
          mergeMap(() => this.storeService.getAllStore())
          .subscribe((results) => {
            this.rows = results;
          });
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
      // if (result !== undefined) {
      //   this.storeService.addMaterial(result).pipe(
      //     mergeMap(() => this.storeService.getAllMaterial()))
      //     .subscribe((results) => {
      //       this.rows = results;
      //     });
      // }
    });
  }
  checkAssignMat() {
    this.temp2.forEach(element => {
      if (element.assignMat !== null) {
        this.row3.push(element.assignMat);
      }
    });
    this.temp3 = this.row3 ;
  }
}
