import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { AirlineBookingReportComponent } from './components/airline-booking-report/airline-booking-report.component';
import { PgwiseBookingReportComponent } from './components/pgwise-booking-report/pgwise-booking-report.component';
import { AirlineSummaryReportComponent } from './components/airline-summary-report/airline-summary-report.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dailyreport',
        pathMatch: 'full',
    },
    {
        path: 'daily-report',
        loadChildren: () =>
            import('./components/dailyreport/dailyreport.module').then(
                (m) => m.DailyreportModule
            ),
    },
    {
        path: 'consolidated-view',
        loadChildren: () =>
            import(
                './components/consolidatedview/consolidatedview.module'
            ).then((m) => m.ConsolidatedviewModule),
    },
    {
      path:'airline-booking-report',
      component:AirlineBookingReportComponent
    },
    {
        path:'airline-summary-report',
        component:AirlineSummaryReportComponent
    },
    {
        path:'pgwise-booking-report',
        component:PgwiseBookingReportComponent
    },
    {
        path:'summary-report',
        component:SummaryReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AirlinebookingRoutingModule {}
