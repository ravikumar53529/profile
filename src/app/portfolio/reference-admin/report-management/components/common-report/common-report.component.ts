import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import { Customheaders } from '../../interfaces/customheaders';
import { Subject, takeUntil } from 'rxjs';
@Component({
    selector: 'app-common-report',
    templateUrl: './common-report.component.html',
    styleUrls: ['./common-report.component.scss'],
})
export class CommonReportComponent implements OnInit,OnDestroy {
    public displayData = false;
    public headersData: Customheaders[]=[];
    public title = '';
    public componentDestroyed$:Subject<boolean>=new Subject();
    constructor(
        private route: ActivatedRoute,
        private reportServiceRef: ReportsService
    ) {}
    public ngOnInit(): void {
        this.initialLoadingMethods();
    }
    public addTitle(endpoint: string) {
        switch (endpoint) {
            case 'airline-booking-report':
                this.title = 'Airline Booking Report';
                break;
            case 'airline-summary-report':
                this.title = 'Airline Summary Report';
                break;
            case 'pgwise-booking-report':
                this.title = 'PG Wise Booking Summary';
                break;
            case 'pgwise-detail-report':
                this.title = 'PG Wise Detail Summary';
                break;
            case 'cancellation-report':
                this.title = 'Cancellation Report';
                break;
            case 'summary-report':
                this.title = 'Summary Report';
                break;
            default:
                this.title='';
                break;
        }
    }
    public initialLoadingMethods(): void {
        // Capturing url path
        const urlSegment = this.route.snapshot.url.map(
            (segment) => segment.path
        );
        this.addTitle(urlSegment[0]);
        this.reportServiceRef
            .getReportHeadingsData(urlSegment[0])
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((data) => {
                this.headersData = data;
                this.displayData = true;
            });
    }
    // Unsubscribing the data 
    public ngOnDestroy(): void {
      this.componentDestroyed$.next(true)
    }
}
