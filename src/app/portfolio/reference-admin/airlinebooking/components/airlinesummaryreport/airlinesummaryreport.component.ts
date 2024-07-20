import { Component,OnDestroy,OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ReportsService } from '../../services/reports.service';


@Component({
  selector: 'app-airlinesummaryreport',
  templateUrl: './airlinesummaryreport.component.html',
  styleUrls: ['./airlinesummaryreport.component.scss']
})
export class AirlinesummaryreportComponent implements OnInit,OnDestroy{
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
