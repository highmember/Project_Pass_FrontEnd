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
  public assignMatRet = [];
  public listMatAssignReturn = [];
  public listMatsAssignReturn: any[];
  public formProJC: FormGroup;
  rowssss: any;
  public valueFromStore = [];
  public valueFromStoreTagReturn = [];

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
            matReturn: val.matReturn,
            matUse: val.matUse,
            count: num
          });
          check++;
          num++;
        });
        num = 0;
      });
      this.valueAssigns = this.valueAssign;
    });
  }
  sendMat(val): void {
    const assignMat = [];
    assignMat.push({
      _id: val._id,
      assignMat: val
    });
    this.assignService.updateMatStore(assignMat[0]._id, assignMat[0])
      .mergeMap(() => this.assignService.getAllAssign())
      .subscribe((results) => {
        this.rowssss = results;
      });
  }

  getMatReturnAssign() {
    this.assignService.getSomeAssign(this.formProJC.value.projectCodes).subscribe((results) => {
      this.assignMatRet = results;
      this.assignMatReturn();
    });
  }
  assignMatReturn() {
    this.storeService.getSomeMat(this.assignMatRet).subscribe((results) => {
      this.valueFromStoreTagReturn = results;
      let num = 0;
      let check = 0;
      this.assignMatRet.forEach((ele) => {
        ele.value.assignMat.forEach((val) => {
          if (val.matReturn === true) {
            this.listMatAssignReturn.push({
              _id: ele.value._id,
              assignProject_id: ele.value.assignProject_id,
              mat_id: val._id,
              matId: val.matId,
              matItem: val.matItem,
              matNum: val.matNum,
              matRecive: val.matRecive,
              matToStore: val.matRecive - val.matUse,
              matType: val.matType,
              matGoAt: ele.value.assignEmpType,
              matDate: val.matDate,
              matUse: val.matUse,
              matForm: this.valueFromStoreTagReturn[check].materialForm,
              count: num
            });
          }
          check++;
          num++;
        });
        num = 0;
      });
      this.listMatsAssignReturn = this.listMatAssignReturn;
    });
  }
  sendMatToStore(val) {
    this.storeService.findAndUpdateLeftOver(val.matId, val)
      .mergeMap(() => this.storeService.getAllStore())
      .subscribe((results) => {
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

}
