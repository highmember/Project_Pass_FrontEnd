import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { JwtService } from './shared/service/jwt.service';
import { ApiService } from './shared/service/api.service';
import { TestService } from './shared/service/test.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { TestDialogComponent } from './test/test-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from './shared/shared.module';
import { SaleDialogComponent } from './sale/sale-dialog.component';
import { P1Component } from './p1/p1.component';
import { P1DialogComponent } from './p1/p1-dialog.component';
import { P1FileDialogComponent } from './p1/p1-flie-dialog.component';
import { P1UpdateDialogComponent } from './p1/p1-update.dialog.component';
import { PmcontrolComponent } from './pmcontrol/pmcontrol.component';
import { DialogDraftComponent } from './pmcontrol/dialog-draft.component';
import { MatInputModule } from '@angular/material/input';
import { enableProdMode } from '@angular/core';
import { AssignPart1Component } from './pmcontrol/assign-part1/assign-part1.component';
import { AssignPart2Component } from './pmcontrol/assign-part2/assign-part2.component';
import { AssignPart3Component } from './pmcontrol/assign-part3/assign-part3.component';
import { AssignPart4Component } from './pmcontrol/assign-part4/assign-part4.component';
import { FristpageComponent } from './pmcontrol/fristpage/fristpage.component';
import { MatListModule } from '@angular/material/list';

import { ProjectService } from './shared/service/project.service';
import { CustomerService } from './shared/service/customer.service';
import { SaleFileDialogComponent } from './sale/sale-file-dialog.component';
import { AdminComponent } from './admin/admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerDialogComponent } from './admin/customer-dialog.component';
import { AdminSaleDialogComponent } from './admin/sale-dialog.component';
import { AdminPmDialogComponent } from './admin/pm-dialog.component';
import { AdminEmpDialogComponent } from './admin/emp-dialog.component';
import { EmployeeService } from './shared/service/employee.service';
import { SaleService } from './shared/service/sale.service';
import { PmService } from './shared/service/pm.service';

import { FristTimeProjectComponent } from './pmcontrol/frist-time-project/frist-time-project.component';
import { ViewdialogComponent } from './store/view-dialog.component';
import { MatDialogComponent } from './store/material-dialog.component';
import { StoreComponent } from './store/store.component';
import { DraftComponent } from './draft/draft.component';
import { DraftfileComponent } from './draft/draft-file-dailog.component';
import { StoreService } from './shared/service/store.service';

const appRoutes: Routes = [
  { path: 'test', component: AppComponent }
];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDialogComponent,
    SaleComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
    P1Component,
    P1DialogComponent,
    P1FileDialogComponent,
    P1UpdateDialogComponent,
    PmcontrolComponent,
    DialogDraftComponent,
    AssignPart1Component,
    AssignPart2Component,
    AssignPart3Component,
    AssignPart4Component,
    FristpageComponent,
    AdminComponent,
    CustomerDialogComponent,
    AdminSaleDialogComponent,
    AdminPmDialogComponent,
    AdminEmpDialogComponent,
    FristTimeProjectComponent,
    ViewdialogComponent,
    MatDialogComponent,
    StoreComponent,
    DraftComponent,
    DraftfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    CdkTableModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [
    JwtService,
    ApiService,
    TestService,
    CustomerService,
    ProjectService,
    PmService,
    SaleService,
    EmployeeService,
    StoreService
  ],
  entryComponents: [
    TestDialogComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
    P1DialogComponent,
    P1FileDialogComponent,
    P1UpdateDialogComponent,
    DialogDraftComponent,
    AssignPart1Component,
    AssignPart2Component,
    AssignPart3Component,
    AssignPart4Component,
    CustomerDialogComponent,
    AdminSaleDialogComponent,
    AdminPmDialogComponent,
    AdminEmpDialogComponent,
    ViewdialogComponent,
    MatDialogComponent,
    DraftfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
