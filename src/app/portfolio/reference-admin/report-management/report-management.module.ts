import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportManagementRoutingModule } from './report-management-routing.module';
import { ConsolidatedViewComponent } from './components/consolidated-view/consolidated-view.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CancellationReportComponent } from './components/cancellation-report/cancellation-report.component';
import { PgwiseDetailComponent } from './components/pgwise-detail/pgwise-detail.component';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { AirlineBookingReportComponent } from './components/airline-booking-report/airline-booking-report.component';
import { AirlineSummaryReportComponent } from './components/airline-summary-report/airline-summary-report.component';
import { PgwiseBookingReportComponent } from './components/pgwise-booking-report/pgwise-booking-report.component';
import { CommonReportComponent } from './components/common-report/common-report.component';

@NgModule({
  declarations: [
    DailyReportComponent,
    ConsolidatedViewComponent,
    DetailedViewComponent,
    CancellationReportComponent,
    PgwiseDetailComponent,
    SummaryReportComponent,
    AirlineBookingReportComponent,
    AirlineSummaryReportComponent,
    PgwiseBookingReportComponent,
    CommonReportComponent
  ],
  imports: [
    CommonModule,
    ReportManagementRoutingModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    SidebarModule,
    CustomizeModule,
    InputTextareaModule
  ]
})
export class ReportManagementModule { }
