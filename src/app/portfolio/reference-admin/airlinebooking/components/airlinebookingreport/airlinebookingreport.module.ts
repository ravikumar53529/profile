import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinebookingreportRoutingModule } from './airlinebookingreport-routing.module';
import { AirlinebookingreportComponent } from './airlinebookingreport.component';
import { CustomizeModule } from 'src/app/admin/shared/components/customize/customize.module';

@NgModule({
    declarations: [AirlinebookingreportComponent],
    imports: [CommonModule, AirlinebookingreportRoutingModule, CustomizeModule],
})
export class AirlinebookingreportModule {}
