import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinebookingRoutingModule } from './airlinebooking-routing.module';
import { CustomizeModule } from '../../shared/components/customize/customize.module';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { PgwiseBookingReportComponent } from './components/pgwise-booking-report/pgwise-booking-report.component';
import { AirlineBookingReportComponent } from './components/airline-booking-report/airline-booking-report.component';
import { AirlineSummaryReportComponent } from './components/airline-summary-report/airline-summary-report.component';
@NgModule({
    declarations: [
        SummaryReportComponent,
        PgwiseBookingReportComponent,
        AirlineBookingReportComponent,
        AirlineSummaryReportComponent
    ],
    imports: [CommonModule, AirlinebookingRoutingModule,CustomizeModule],
})
export class AirlinebookingModule {}
