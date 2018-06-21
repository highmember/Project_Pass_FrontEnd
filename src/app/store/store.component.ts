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
  public rows = [];
  public dataMat = [];
  public matback: any[];
  public customer: any[];
  public customerName: String;
  public matPart: String;
  public rowss: any[];
  public temp2: any[];
  public rows2 = [];
  public rowss2: any[];
  public assignMat: any[];
  constructor(
    private dialog: MatDialog,
    private storeService: StoreService,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.storeService.getAllStore().subscribe((results) => {
      this.temp = results;
      this.check();
    });
    this.assignService.getAllAssign().subscribe((results) => {
      this.assignMat = results;
      this.rowss2 = results;
    //  console.log(this.assignMat)
      this.checkAssign();
      this.checkpart();
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
  checkAssign() {
    this.assignMat.forEach(element => {
      if (element.assignMat !== null) {
        element.assignMat.forEach(value => {
          this.dataMat.push(value);
        });
      }
    });
    this.assignMat = this.dataMat;
  }
  checkpart() {
    this.rowss2.forEach(element => {
      if (element.assignMat !== null) {
        this.rows2.push(element.assignEmpType)
        this.matPart = element.assignEmpType;
      }
    });
    // this.rowss2 = this.rows2;
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
            this.rowss = results;
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
            this.rowss = results;
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
            this.rowss = results;
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
}
