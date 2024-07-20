import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryreportRoutingModule } from './summaryreport-routing.module';
import { SummaryreportComponent } from './summaryreport.component';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';

@NgModule({
    declarations: [SummaryreportComponent],
    imports: [CommonModule, SummaryreportRoutingModule, CustomizeModule],
})
export class SummaryreportModule {}
