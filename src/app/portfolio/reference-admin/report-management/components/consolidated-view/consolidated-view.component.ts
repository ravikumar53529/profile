import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsolidatedData } from '../../interfaces/consolidateddata';
import { Consolidatedblocks } from '../../interfaces/consolidatedblocks';
import { ReportsService } from '../../services/reports.service';


@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.scss']
})
export class ConsolidatedViewComponent {
  public transactionId!:string;
  public consolidatedData:ConsolidatedData[]=[]
  public consolidatedBlocks:Consolidatedblocks[]=[]
  public consolidatedViewSub$!:Subscription;
  public consolidatedBlocksSub$!:Subscription
  constructor(
    private routeRef:ActivatedRoute,
    private reportsServiceRef:ReportsService,
    private routerRef:Router
  ){

  }
  public ngOnInit(): void {
    // Initial loading methods
    this.initialLoadingMethods()
  }

  public initialLoadingMethods(){
   this.gettingParameters()
   this.onGettingConsolidatedData()
   this.gettingConsolidatedBlocks()
  }
  public gettingParameters():void{
   this.routeRef.params.subscribe(params=>{
    this.transactionId=params['transactionid']
     })
  }

  public onGettingConsolidatedData():void{
    this.consolidatedViewSub$=this.reportsServiceRef.gettingConsolidatedView().subscribe({
      next:(response)=>{
        this.consolidatedData=response
      }
    })
  }

  // getting consolidated blocks
  public gettingConsolidatedBlocks():void{
    this.consolidatedBlocksSub$=this.reportsServiceRef.gettingConsolidatedBlocks().subscribe({
      next:(response)=>{
       this.consolidatedBlocks=response
      }
    })
  }

  // goto detailed page
  public goToDetailedPage(type:string):void{
   const url=`/admin/report-management/consolidated-view/${type}/${this.transactionId}`
   this.routerRef.navigate([url]);
  }

  // back to consolidated
  public backToConsolidated():void{
    const url=`admin/report-management/daily-report`
    this.routerRef.navigate([url])
  }
 
  public ngOnDestroy(): void {
    this.consolidatedViewSub$.unsubscribe();
    this.consolidatedBlocksSub$.unsubscribe();
  }
 
}
