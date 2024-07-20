import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from '../../services/reports.service';

@Component({
    selector: 'app-summaryreport',
    templateUrl: './summaryreport.component.html',
    styleUrls: ['./summaryreport.component.scss'],
})
export class SummaryreportComponent implements OnInit, OnDestroy {
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
        this.reportsServiceRef.gettingSummaryReportHeaders().subscribe({
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
