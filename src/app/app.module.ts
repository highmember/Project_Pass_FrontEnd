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
import { SaleFileDialogComponent } from './sale/sale-File-dialog.component';
<<<<<<< HEAD
import { P1Component } from './p1/p1.component';
import { P1DialogComponent } from './p1/p1-dialog.component';
import { P1FileDialogComponent } from './p1/p1-flie-dialog.component';
import { P1UpdateDialogComponent } from './p1/p1-update.dialog.component';
=======
import { PmcontrolComponent } from './pmcontrol/pmcontrol.component';
import { DialogDraftComponent } from './pmcontrol/dialog-draft.component';
import {MatInputModule} from '@angular/material/input';
import 'hammerjs/hammer';
import {enableProdMode} from '@angular/core';
import { Part1Component } from './pmcontrol/part1/part1.component';
import { AssignPast2Component } from './pmcontrol/assign-past2/assign-past2.component';
import { AssignPast3Component } from './pmcontrol/assign-past3/assign-past3.component';
import { AssignPast4Component } from './pmcontrol/assign-past4/assign-past4.component';

>>>>>>> 9d51b46430a86fd535591f68eff182b24964190b
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
<<<<<<< HEAD
    P1Component,
    P1DialogComponent,
    P1FileDialogComponent,
    P1UpdateDialogComponent,
=======
    PmcontrolComponent,
    DialogDraftComponent,
    Part1Component,
    AssignPast2Component,
    AssignPast3Component,
    AssignPast4Component,
>>>>>>> 9d51b46430a86fd535591f68eff182b24964190b
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
  ],
  entryComponents: [
    TestDialogComponent,
    SaleDialogComponent,
    SaleFileDialogComponent,
<<<<<<< HEAD
    P1DialogComponent,
    P1FileDialogComponent,
    P1UpdateDialogComponent,
=======
    DialogDraftComponent,
    Part1Component,
    AssignPast2Component,
    AssignPast3Component,
    AssignPast4Component
>>>>>>> 9d51b46430a86fd535591f68eff182b24964190b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
