import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SaleDialogComponent } from './sale-dialog.component';
import { SaleFileDialogComponent } from './sale-file-dialog.component';
import { CustomerService } from '../shared/service/customer.service';
import { ProjectService } from '../shared/service/project.service';
import { ConfirmDeleteDialogComponent } from '../@theme/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public rows: any[];
  public saleId: string;
  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.saleId = this.route.snapshot.paramMap.get('id');
    this.projectService.getIdProjectFromSale(this.saleId).subscribe((results) => {
      this.rows = results;
    });
  }
  insertProject(): void {
    const dialogRef = this.dialog.open(SaleDialogComponent, {
      width: '1000px',
      data: {
        sale: this.saleId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.customer.customerPhone !== undefined) {
          this.customerService.addCustomer(result.customer).mergeMap(() =>
            this.customerService.getCustomerId())
            .subscribe((results) => {
              const value = {
                oldProjectCode: result.oldProjectCode,
                projectCode: result.projectCode,
                projectFile: result.projectFile,
                projectType: result.projectType,
                scopeStart: result.scopeStart,
                scopeEnd: result.scopeEnd,
                customer: results._id,
                pm: result.pm,
                sale: result.sale
              };
              this.projectService.addProject(value).mergeMap(() =>
                this.projectService.getIdProjectFromSale(this.saleId))
                .subscribe((resultss) => {
                  this.rows = resultss;
                });
            });
        } else {
          this.projectService.addProject(result).mergeMap(() =>
            this.projectService.getIdProjectFromSale(this.saleId))
            .subscribe((results) => {
              this.rows = results;
            });
        }
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
