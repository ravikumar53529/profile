import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-airline-summary-report',
  templateUrl: './airline-summary-report.component.html',
  styleUrls: ['./airline-summary-report.component.scss']
})
export class AirlineSummaryReportComponent {
  public airlinesSummaryHeaders:any=[]
  public data=false;
  public destroyed$=new Subject<void>()
 constructor(
  private reportsServiceRef:ReportsService
 ){}

 public ngOnInit(): void {
   this.initialLoadingMethods()
 }

 public initialLoadingMethods():void{
    this.gettingAirlinesSummaryHeaders()
 }

//  getting airlines summary headers
 public gettingAirlinesSummaryHeaders():void{
  this.reportsServiceRef.gettingAirlinesSummaryReport().pipe(takeUntil(this.destroyed$)).subscribe({
    next:(response)=>{
      this.airlinesSummaryHeaders=response; 
      this.data=true
    }
  })
 }

//  unsubscriing the data 
 public ngOnDestroy(): void {
   this.destroyed$.next()
   this.destroyed$.complete()
 }
}
