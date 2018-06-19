import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextNormalComponent } from './text-normal/text-normal.component';
import { MaterialModule } from '../../../shared/material.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeComponent } from './time/time.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { MatNativeDateModule } from '@angular/material';
import { NumberComponent } from './number/number.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { AutocompleteStoreComponent } from './autocomplete-Store/autocomplete-Store.component';
@NgModule({
  imports: [
    MaterialModule,
    FileUploadModule,
    CommonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TextNormalComponent,
    UploadFileComponent,
    DropdownComponent,
    TimeComponent,
    DateTimeComponent,
    NumberComponent,
    RadioButtonComponent,
    AutocompleteStoreComponent
  ],
  exports: [
    TextNormalComponent,
    UploadFileComponent,
    DropdownComponent,
    TimeComponent,
    DateTimeComponent,
    NumberComponent,
    RadioButtonComponent,
    AutocompleteStoreComponent
  ]
})
export class InputModule { }
