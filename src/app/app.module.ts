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
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { TestDialogComponent } from './test/test-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  {path: 'test', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
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
    MatDatepickerModule
  ],
  entryComponents: [
    TestDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
