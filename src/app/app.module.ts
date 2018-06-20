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
import { DialogDraftComponent } from './fristpage/pmcontrol/dialog-draft.component';
import { AssignPart1Component } from './fristpage/pmcontrol/assign-part1/assign-part1.component';
import { AssignPart3Component } from './fristpage/pmcontrol/assign-part3/assign-part3.component';
import { AssignPart4Component } from './fristpage/pmcontrol/assign-part4/assign-part4.component';
import { AssignPart2Component } from './fristpage/pmcontrol/assign-part2/assign-part2.component';
import { PmcontrolComponent } from './fristpage/pmcontrol/pmcontrol.component';
import { AssignService } from './shared/service/assign.service';
import { ViewdraftComponent } from './fristpage/pmview/viewdraft/viewdraft.component';
import { Viewpart2Component } from './fristpage/pmview/viewpart2/viewpart2.component';
import { Viewpart1Component } from './fristpage/pmview/viewpart1/viewpart1.component';
import { Viewpart3Component } from './fristpage/pmview/viewpart3/viewpart3.component';
import { Viewpart4Component } from './fristpage/pmview/viewpart4/viewpart4.component';
import { P3Component } from './p3/p3.component';
import { P3DialogComponent } from './p3/p3-dialog.component';
import { P3FileDialogComponent } from './p3/p3-file-dialog.component';
import { P4Component } from './p4/p4.component';
import { P4DialogComponent } from './p4/p4-dialog.component';
import { P4FileDialogComponent } from './p4/p4-file-dialog.component';
import { BillComponent } from './bill/bill.component';
import { P2Component } from './p2/p2.component';
import { P2DialogComponent } from './p2/p2-dialog.component';
import { P2FileDialogComponent } from './p2/p2-flie-dialog.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  // { path: 'admin', component: AdminComponent },
  // { path: 'Pmcontrol', component: PmcontrolComponent },
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
    ViewdraftComponent,
    Viewpart2Component,
    Viewpart1Component,
    Viewpart3Component,
    Viewpart4Component,
    P1Component,
    P3Component,
    P3DialogComponent,
    P3FileDialogComponent,
    P4Component,
    P4FileDialogComponent,
    P4DialogComponent,
    BillComponent,
    P2Component,
    P2DialogComponent,
    P2FileDialogComponent
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
  ],
  entryComponents: [
    TestDialogComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
    P1DialogComponent,
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
    P2DialogComponent,
    P4FileDialogComponent,
    P4DialogComponent,
    P3FileDialogComponent,
    P3DialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
