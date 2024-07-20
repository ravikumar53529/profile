import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesummaryreportComponent } from './airlinesummaryreport.component';

const routes: Routes = [
  {
    path:'',component:AirlinesummaryreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlinesummaryreportRoutingModule { }
