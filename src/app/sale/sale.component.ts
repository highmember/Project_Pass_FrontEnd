import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SaleDialogComponent } from './sale-dialog.component';
import { SaleFileDialogComponent } from './sale-file-dialog.component';
import { CustomerService } from '../shared/service/customer.service';
import { ProjectService } from '../shared/service/project.service';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public rows: any[];
  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe((results) => {
      this.rows = results;
      console.log(this.rows);
    });
  }
  insertProject(): void {
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '1000px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.customer.customerPhone !== undefined) {
          this.customerService.addCustomer(result.customer).mergeMap(() =>
            this.customerService.getAllCustomer())
            .subscribe((results) => {
            });
        }
        this.projectService.addProject(result).mergeMap(() =>
          this.projectService.getAllProject())
          .subscribe((results) => {
            this.rows = results;
          });
      }
    });
  }
  viewFile(row): void {
    const dialogRef = this.dialog.open(SaleFileDialogComponent, {
      width: '1000px',
      data: {
        file: row.projectFile
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
      }
    });
  }

  confirmDelete(row): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        this.projectService.deleteProject(row._id).
          mergeMap(() => this.projectService.getAllProject())
          .subscribe((results) => {
            this.rows = results;
          });
      }
    });
  }
}
