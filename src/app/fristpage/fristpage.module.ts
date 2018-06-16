import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../@theme/menu/menu.module';
import { PmcontrolComponent } from './pmcontrol/pmcontrol.component';

@NgModule({
  imports: [
    SharedModule,
    MenuModule,
  ],
  declarations: [
    PmcontrolComponent
  ],
  entryComponents: [

  ]
})
export class FristpageModule {
}
