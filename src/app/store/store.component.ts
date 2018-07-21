import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewdialogComponent } from './view-dialog.component';
import { MatDialogComponent } from './material-dialog.component';
import { StoreService } from '../shared/service/store.service';
import { mergeMap } from 'rxjs/operators';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ProjectService } from '../shared/service/project.service';
import { AssignService } from '../shared/service/assign.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public temp: any[];
  public rows = [];
  public rowss: any[];
  public datamat: any[];
  public matback: any[];
  public customer: any[];
  public customerName: String;
  public projectCode = '';
  public tmp: any[];
  public valueAssign: any[];
  constructor(
    private dialog: MatDialog,
    private storeService: StoreService,
    private projectService: ProjectService,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe((results) => {
      this.tmp = results;
      console.log(this.tmp)
    });
    this.storeService.getAllStore().subscribe((results) => {
      this.temp = results;
      this.check();
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
  getAssign() {
    this.assignService.getSomeAssign(this.projectCode).subscribe((results) => {
      this.valueAssign = results;
      console.log(this.valueAssign)
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
