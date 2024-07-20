import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.scss']
})
export class SummaryReportComponent  implements OnInit,OnDestroy{
  public summaryReportsHeaders: any[] = [];
  public displayData = false;
  public summaryReportSubscription$!: Subscription;
  constructor(private reportsServiceRef: ReportsService) {}

  public ngOnInit(): void {
      this.intialLoadingMethods();
  }

  public intialLoadingMethods(): void {
      this.gettingSummaryReportsHeaders();
  }

  // getting summaryreports headers
  public gettingSummaryReportsHeaders(): void {
      this.summaryReportSubscription$=this.reportsServiceRef.gettingSummaryReportHeaders().subscribe({
          next: (response) => {
              this.summaryReportsHeaders = response;
              this.displayData = true;
          },
      });
  }

  // unsubscribing the data
  public ngOnDestroy(): void {
      if (this.summaryReportSubscription$) {
          this.summaryReportSubscription$.unsubscribe();
      }
  }
}
