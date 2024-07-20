import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolidatedviewRoutingModule } from './consolidatedview-routing.module';
import { ConsolidatedviewComponent } from './consolidatedview.component';
import { DetailedconsolidateddataComponent } from './detailedconsolidateddata/detailedconsolidateddata.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    ConsolidatedviewComponent,
    DetailedconsolidateddataComponent
  ],
  imports: [
    CommonModule,
    ConsolidatedviewRoutingModule,
    ButtonModule,
    InputTextareaModule
  ]
})
export class ConsolidatedviewModule { }
