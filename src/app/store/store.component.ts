import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewdialogComponent } from './view-dialog.component';
import { MatDialogComponent } from './material-dialog.component';
import { StoreService } from '../shared/service/store.service';
import { mergeMap } from 'rxjs/operators';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { AssignService } from '../shared/service/assign.service';
import { ProjectService } from '../shared/service/project.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  public projectCodes = [];
  public tmp: any[];
  public projectCode: String;
  public valueAssign = [];
  public valueAssigns: any[];
  public assignMat = [];
  public formProJC: FormGroup;
  rowssss: any;
  public valueFromStore = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private storeService: StoreService,
    private projectService: ProjectService,
    private assignService: AssignService,
  ) { }

  ngOnInit() {
    this.formProJC = this.formBuilder.group({});
    this.storeService.getAllStore().subscribe((results) => {
      this.temp = results;
      this.check();
    });
    this.projectService.getAllProject().subscribe((results) => {
      this.tmp = results;
      this.checkAssign();
    });
  }

  checkAssign() {
    this.tmp.forEach(element => {
      this.projectCodes.push(element.projectCode);
    });
  }
  // tslint:disable-next-line:max-line-length
  // --------------------------------------------------------------------------คำสั่งของ---------------------------------------------------------------------------------
  getMatassign() {
    this.assignService.getSomeAssign(this.formProJC.value.projectCodes).subscribe((results) => {
      this.assignMat = results;
      this.assignMatF();
    });
  }
  assignMatF() {
    this.storeService.getSomeMat(this.assignMat).subscribe((results) => {
      this.valueFromStore = results;
      let num = 0;
      let check = 0;
      this.assignMat.forEach((ele) => {
        ele.value.assignMat.forEach(val => {
          this.valueAssign.push({
            _id: ele.value._id,
            assignProject_id: ele.value.assignProject_id,
            mat_id: val._id,
            matId: val.matId,
            matItem: val.matItem,
            matNum: val.matNum,
            matRecive: val.matRecive,
            matFromStore: this.valueFromStore[check].materialNum,
            matType: val.matType,
            matGoAt: ele.value.assignEmpType,
            matDate: val.matDate,
            matForm: this.valueFromStore[check].materialForm,
            count: num
          });
          console.log(this.valueFromStore[check].materialForm)
          check++;
          num++;
        });
        num = 0;
      });
      this.valueAssigns = this.valueAssign;
    });
  }
  sendMat(val): void {
    console.log(val)
    const assignMat = [];
    assignMat.push({
      _id: val._id,
      assignMat: val
    });
    console.log(assignMat[0]._id)
    this.assignService.updateMatStore(assignMat[0]._id, assignMat[0])
      .mergeMap(() => this.assignService.getAllAssign())
      .subscribe((results) => {
        this.rowssss = results;
      });
  }
  // tslint:disable-next-line:max-line-length
  // --------------------------------------------------------------------------คำสั่งของ---------------------------------------------------------------------------------


  check() {
    this.temp.forEach(element => {
      if (element.materialName !== 'อื่นๆ') {
        this.rows.push(element);
      }
    });
    this.rowss = this.rows;
  }
  addMatToStore(val) {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: {
        materialId: val.matId,
        materialName: val.matItem,
        materialNum: val.matFromStore,
        materialUnit: val.matType,
        materialPrice: 0,
        materialForm: 'old'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.storeService.addStore(result).pipe(
          mergeMap(() => this.storeService.getAllStore()))
          .subscribe((results) => {
            this.rowss = results;
          });
        const matForm = [];
        matForm.push({
          _id: val._id,
          valueAssign: val,
          value: result,
          matForms: 'old'
        });
        this.assignService.updateMatStoreForm(val._id, matForm)
          .mergeMap(() => this.assignService.getAllAssign())
          .subscribe((results) => {
            this.rowssss = results;
          });
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
        materialPrice: row.materialPrice,
        materialForm: row.materialForm
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

}
