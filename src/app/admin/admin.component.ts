import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerDialogComponent } from './customer-dialog.component';
import { AdminSaleDialogComponent } from './sale-dialog.component';
import { AdminPmDialogComponent } from './pm-dialog.component';
import { AdminEmpDialogComponent } from './emp-dialog.component';
import { PmService } from '../shared/service/pm.service';
import { SaleService } from '../shared/service/sale.service';
import { CustomerService } from '../shared/service/customer.service';
import { EmployeeService } from '../shared/service/employee.service';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { AdminUserDialogComponent } from './user-dialog.component';
import { UserService } from '../shared/service/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public customer: any[];
  public sale: any[];
  public pm: any[];
  public employee: any[];
  public employeeType = ['Draft', 'Part1', 'Part2', 'Part3', 'Part4'];
  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService,
    private saleService: SaleService,
    private pmService: PmService,
    private employeeService: EmployeeService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomer().subscribe((results) => {
      this.customer = results;
    });
    this.saleService.getAllSale().subscribe((results) => {
      this.sale = results;
    });
    this.pmService.getAllPm().subscribe((results) => {
      this.pm = results;
    });
    this.employeeService.getAllEmployee().subscribe((results) => {
      this.employee = results;
    });
  }
  openCusDialog() {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '1000px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.customerService.addCustomer(result).
          mergeMap(() => this.customerService.getAllCustomer())
          .subscribe((results) => {
            this.customer = results;
          });
      }
    });
  }
  editCusDialog(row) {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '1000px',
      data: {
        customerName: row.customerName,
        customerPhone: row.customerPhone,
        customerAddress: row.customerAddress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.customerService.updateCustomer(row._id, result).
          mergeMap(() => this.customerService.getAllCustomer())
          .subscribe((results) => {
            this.customer = results;
          });
      }
    });
  }
  confirmCusDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.customerService.deleteCustomer(row._id).
          mergeMap(() => this.customerService.getAllCustomer())
          .subscribe((results) => {
            this.customer = results;
          });
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
        this.saleService.addSale(result).
          mergeMap(() => this.saleService.getAllSale())
          .subscribe((results) => {
            this.sale = results;
          });
      }
    });
  }
  editSaleDialog(row) {
    const dialogRef = this.dialog.open(AdminSaleDialogComponent, {
      width: '1000px',
      data: {
        saleName: row.saleName,
        salePhone: row.salePhone,
        saleAddress: row.saleAddress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.saleService.updateSale(row._id, result).
          mergeMap(() => this.saleService.getAllSale())
          .subscribe((results) => {
            this.sale = results;
          });
      }
    });
  }
  confirmSaleDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.saleService.deleteSale(row._id).
          mergeMap(() => this.saleService.getAllSale())
          .subscribe((results) => {
            this.sale = results;
          });
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
        this.pmService.addPm(result).
          mergeMap(() => this.pmService.getAllPm())
          .subscribe((results) => {
            this.pm = results;
          });
      }
    });
  }
  editPmDialog(row) {
    const dialogRef = this.dialog.open(AdminPmDialogComponent, {
      width: '1000px',
      data: {
        pmName: row.pmName,
        pmPhone: row.pmPhone,
        pmAddress: row.pmAddress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.pmService.updatePm(row._id, result).
          mergeMap(() => this.pmService.getAllPm())
          .subscribe((results) => {
            this.pm = results;
          });
      }
    });
  }
  confirmPmDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.pmService.deletePm(row._id).
          mergeMap(() => this.pmService.getAllPm())
          .subscribe((results) => {
            this.pm = results;
          });
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
        this.employeeService.addEmployee(result).
          mergeMap(() => this.employeeService.getAllEmployee())
          .subscribe((results) => {
            this.employee = results;
          });
      }
    });
  }
  editEmpDialog(row) {
    const dialogRef = this.dialog.open(AdminEmpDialogComponent, {
      width: '1000px',
      data: {
        employeeName: row.employeeName,
        employeePhone: row.employeePhone,
        employeeAddress: row.employeeAddress,
        employeeType: row.employeeType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.employeeService.updateEmployee(row._id, result).
          mergeMap(() => this.employeeService.getAllEmployee())
          .subscribe((results) => {
            this.employee = results;
          });
      }
    });
  }
  confirmEmpDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.employeeService.deleteEmployee(row._id).
          mergeMap(() => this.employeeService.getAllEmployee())
          .subscribe((results) => {
            this.employee = results;
          });
      }
    });
  }
  openUserDialog(val, type) {
    const dialogRef = this.dialog.open(AdminUserDialogComponent, {
      width: '1000px',
      data: {
        val: val,
        type: type
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.userService.addUser(result).subscribe(() => {});
      }
    });
  }
}
