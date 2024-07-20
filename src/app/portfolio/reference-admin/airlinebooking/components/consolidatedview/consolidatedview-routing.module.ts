import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedviewComponent } from './consolidatedview.component';
import { DetailedconsolidateddataComponent } from './detailedconsolidateddata/detailedconsolidateddata.component';

const routes: Routes = [
  {
    path:'',redirectTo:"transaction",pathMatch:'full'
  },
  {
    path:'transaction/:transactionid',
    component:ConsolidatedviewComponent
  },
  {
    path:':type/:transactionid',component:DetailedconsolidateddataComponent
  },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidatedviewRoutingModule { }
