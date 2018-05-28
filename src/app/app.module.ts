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
const appRoutes: Routes = [
  { path: 'test', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDialogComponent,
    SaleComponent,
    SaleDialogComponent,
    SaleFileDialogComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JwtService,
    ApiService,
    TestService,
  ],
  entryComponents: [
    TestDialogComponent,
    SaleDialogComponent,
    SaleFileDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
