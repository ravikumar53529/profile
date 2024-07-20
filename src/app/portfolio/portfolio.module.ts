import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports:[
    PortfolioComponent
  ]
})
export class PortfolioModule { }
