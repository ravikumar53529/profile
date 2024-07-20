import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyreportComponent } from './dailyreport.component';

const routes: Routes = [
  {
    path:'',redirectTo:'',pathMatch:'full'
  },
  {
    path:'',component:DailyreportComponent
  },
  {
    path:"**",redirectTo:'/notfound'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyreportRoutingModule { }
