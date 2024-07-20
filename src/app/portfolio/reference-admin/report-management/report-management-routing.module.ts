import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedViewComponent } from './components/consolidated-view/consolidated-view.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { CommonReportComponent } from './components/common-report/common-report.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'daily-report',
    pathMatch:"full"
  },
  {
    path:'daily-report',
    component:DailyReportComponent
  },
  {
    path:'consolidated-view/:transactionid',
    component:ConsolidatedViewComponent
  },
  {
    path:'consolidated-view/:type/:transactionid',
    component:DetailedViewComponent
  },
  {
    path:'cancellation-report',
    component:CommonReportComponent
  },
 
  {
    path:'airline-booking-report',
    component:CommonReportComponent
  },
  {
    path:'airline-summary-report',
    component:CommonReportComponent
},
{
    path:'pgwise-booking-report',
    component:CommonReportComponent
},
{
  path:'pgwise-detail-report',
  component:CommonReportComponent
},
{
  path:'summary-report',
  component:CommonReportComponent
}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportManagementRoutingModule { }
