import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinesummaryreportRoutingModule } from './airlinesummaryreport-routing.module';
import { AirlinesummaryreportComponent } from './airlinesummaryreport.component';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';


@NgModule({
  declarations: [
    AirlinesummaryreportComponent
  ],
  imports: [
    CommonModule,
    AirlinesummaryreportRoutingModule,
    CustomizeModule
  ]
})
export class AirlinesummaryreportModule { }
