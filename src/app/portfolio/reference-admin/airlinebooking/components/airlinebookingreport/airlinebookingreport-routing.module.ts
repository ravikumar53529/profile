import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinebookingreportComponent } from './airlinebookingreport.component';

const routes: Routes = [
  {
    path:'',component:AirlinebookingreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlinebookingreportRoutingModule { }
