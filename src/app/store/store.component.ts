import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewdialogComponent } from './view-dialog.component';
import { MatDialogComponent } from './material-dialog.component';
import { StoreService } from '../shared/service/store.service';
import { mergeMap } from 'rxjs/operators';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';

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
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.storeService.getAllStore().subscribe((results) => {
      this.rows = results;
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
}
