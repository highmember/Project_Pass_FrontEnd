import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerDialogComponent } from './customer-dialog.component';
import { AdminSaleDialogComponent } from './sale-dialog.component';
import { AdminPmDialogComponent } from './pm-dialog.component';
import { AdminEmpDialogComponent } from './emp-dialog.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public customer: any[];
  public sale: any[];
  public pm: any[];
  public emp: any[];
  public oldSale = ['ก้องภพ ลีลา', 'บุญฤทธิ์ วงศ์วาด', 'สุนทร ดิษช่วย', 'จิณณธรรม จักรวาฬ'];
  public oldPM = ['พัชนิดา ฉิมติน', 'สมนึก ดิษช่วย', 'ธีธัช เหล็กกล้า', 'เขมวัฒน์ เสียงสุข', 'ไพเราะ แซ่หวาย'];
  public oldEmployee = ['ศุกชัย แซ่ตั้ง', 'มานะ สลักคำ', 'ศุภโชค ชิงชัย', 'สิทธิ์สวัสดิ์ เอี่ยมลาภะ'];
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.customer = [{
      customerName: 'สุทธิ ใจเย็น',
      customerPhone: '0805215124',
      customerAddress: 'dsadsadsad'
    }];
    this.sale = [{
      saleName: 'บุญฤทธิ์ วงศ์วาด',
      salePhone: '0815550322',
      saleAddress: 'กรุงเทพ ประเวศ'
    }];
    this.pm = [{
      pmName: 'บุญฤทธิ์ วงศ์วาด',
      pmPhone: '0815550322',
      pmAddress: 'กรุงเทพ ประเวศ'
    }];
    this.emp = [{
      empName: 'สุนธร ดิษช่วยบากัส',
      empPhone: '0811550342',
      empAddress: 'กรุงเทพ ประเวศ บางนา'
    }];
  }
  openCusDialog() {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
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
  editCusDialog() {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
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
  openSaleDialog() {
    const dialogRef = this.dialog.open(AdminSaleDialogComponent, {
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
  editSaleDialog() {
    const dialogRef = this.dialog.open(AdminSaleDialogComponent, {
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
  openPmDialog() {
    const dialogRef = this.dialog.open(AdminPmDialogComponent, {
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
  editPmDialog() {
    const dialogRef = this.dialog.open(AdminPmDialogComponent, {
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
  openEmpDialog() {
    const dialogRef = this.dialog.open(AdminEmpDialogComponent, {
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
  editEmpDialog() {
    const dialogRef = this.dialog.open(AdminEmpDialogComponent, {
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
