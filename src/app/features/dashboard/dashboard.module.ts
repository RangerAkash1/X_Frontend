// dashboard module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHome } from './components/dashboard-home/dashboard-home';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardHome],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardHome }])
  ]
})
export class DashboardModule { }
