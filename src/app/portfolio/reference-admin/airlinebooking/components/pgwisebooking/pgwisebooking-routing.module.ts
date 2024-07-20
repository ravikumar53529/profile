import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgwisebookingComponent } from './pgwisebooking.component';

const routes: Routes = [
  {
    path:'',component:PgwisebookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgwisebookingRoutingModule { }
