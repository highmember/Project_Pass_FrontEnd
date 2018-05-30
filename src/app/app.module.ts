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
import { ProjectService } from './shared/service/project.service';
import { CustomerService } from './shared/service/customer.service';
import { SaleFileDialogComponent } from './sale/sale-file-dialog.component';

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
  ],
  providers: [
    JwtService,
    ApiService,
    TestService,
    CustomerService,
    ProjectService,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
