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
import { P1FileDialogComponent } from './p1/p1-flie-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { enableProdMode } from '@angular/core';
import { FristpageComponent } from './fristpage/fristpage.component';
import { MatListModule } from '@angular/material/list';

import { ProjectService } from './shared/service/project.service';
import { CustomerService } from './shared/service/customer.service';
import { SaleFileDialogComponent } from './sale/sale-file-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerDialogComponent } from './admin/customer-dialog.component';
import { AdminSaleDialogComponent } from './admin/sale-dialog.component';
import { AdminPmDialogComponent } from './admin/pm-dialog.component';
import { AdminEmpDialogComponent } from './admin/emp-dialog.component';
import { EmployeeService } from './shared/service/employee.service';
import { SaleService } from './shared/service/sale.service';
import { PmService } from './shared/service/pm.service';

import { ViewdialogComponent } from './store/view-dialog.component';
import { MatDialogComponent } from './store/material-dialog.component';
import { StoreComponent } from './store/store.component';
import { DraftComponent } from './draft/draft.component';
import { DraftfileComponent } from './draft/draft-file-dailog.component';
import { StoreService } from './shared/service/store.service';
import { DialogDraftComponent } from './pmcontrol/dialog-draft.component';
import { AssignPart1Component } from './pmcontrol/assign-part1/assign-part1.component';
import { AssignPart3Component } from './pmcontrol/assign-part3/assign-part3.component';
import { AssignPart4Component } from './pmcontrol/assign-part4/assign-part4.component';
import { AssignPart2Component } from './pmcontrol/assign-part2/assign-part2.component';
import { PmcontrolComponent } from './pmcontrol/pmcontrol.component';
import { AssignService } from './shared/service/assign.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import { P3Component } from './p3/p3.component';
import { P3FileDialogComponent } from './p3/p3-file-dialog.component';
import { P4Component } from './p4/p4.component';
import { P4FileDialogComponent } from './p4/p4-file-dialog.component';
import { BillComponent } from './bill/bill.component';
import { P2Component } from './p2/p2.component';
import { P2FileDialogComponent } from './p2/p2-flie-dialog.component';
import { UserService } from './shared/service/user.service';
import { AdminUserDialogComponent } from './admin/user-dialog.component';
import { PmviewdetailComponent } from './pmviewdetail/pmviewdetail.component';

const appRoutes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: 'app-admin', component: AdminComponent },
  { path: 'app-sale', component: SaleComponent },
  { path: 'app-store', component: StoreComponent },
  { path: 'app-fristpage', component: FristpageComponent },
  { path: 'app-pmcontrol/:id', component: PmcontrolComponent },
  { path: 'app-draft', component: DraftComponent },
  { path: 'app-p1', component: P1Component },
  { path: 'app-p2', component: P2Component },
  { path: 'app-p3', component: P3Component },
  { path: 'app-p4', component: P4Component },
  { path: 'app-bill', component: BillComponent },
];
enableProdMode();
@NgModule({
  exports: [
    MatFormFieldModule,
    MatSortModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    TestDialogComponent,
    SaleComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
    P1Component,
    P1FileDialogComponent,
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
    ViewdialogComponent,
    MatDialogComponent,
    StoreComponent,
    DraftComponent,
    DraftfileComponent,
    PmcontrolComponent,
    P1Component,
    P3Component,
    P3FileDialogComponent,
    P4Component,
    P4FileDialogComponent,
    BillComponent,
    P2Component,
    P2FileDialogComponent,
    AdminUserDialogComponent,
    PmviewdetailComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSortModule
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
    StoreService,
    AssignService,
    UserService
  ],
  entryComponents: [
    TestDialogComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
    P1FileDialogComponent,
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
    DraftfileComponent,
    P2FileDialogComponent,
    P4FileDialogComponent,
    P3FileDialogComponent,
    AdminUserDialogComponent,
    PmviewdetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
