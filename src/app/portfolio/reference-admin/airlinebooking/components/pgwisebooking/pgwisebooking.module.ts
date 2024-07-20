import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgwisebookingComponent } from './pgwisebooking.component';
import { PgwisebookingRoutingModule } from './pgwisebooking-routing.module';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';




@NgModule({
  declarations: [
    PgwisebookingComponent
  ],
  imports: [
    CommonModule,
    PgwisebookingRoutingModule,
    CustomizeModule

  ]
})
export class PgwisebookingModule { }
