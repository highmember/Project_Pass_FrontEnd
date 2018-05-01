import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule  { }
