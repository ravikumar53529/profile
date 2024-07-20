import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyreportRoutingModule } from './dailyreport-routing.module';
import { DailyreportComponent } from './dailyreport.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';

@NgModule({
  declarations: [
    DailyreportComponent,
  ],
  imports: [
    CommonModule,
    DailyreportRoutingModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    SidebarModule,
    CustomizeModule
    
  ],
  exports:[
    DailyreportComponent
  ]
})
export class DailyreportModule { }
