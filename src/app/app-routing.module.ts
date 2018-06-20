import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FristpageComponent } from './fristpage/fristpage.component';
import { PmcontrolComponent } from './fristpage/pmcontrol/pmcontrol.component';

const routes: Routes = [
    {
      path: '',
      component: FristpageComponent
    },
    {
      path: 'about',
      component: PmcontrolComponent
    }
  ];
