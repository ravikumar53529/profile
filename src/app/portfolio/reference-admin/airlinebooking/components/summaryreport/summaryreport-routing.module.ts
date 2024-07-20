import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryreportComponent } from './summaryreport.component';

const routes: Routes = [
  {
    path:'',component:SummaryreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryreportRoutingModule { }
