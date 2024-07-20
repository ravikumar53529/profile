import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-cancellation-report',
    templateUrl: './cancellation-report.component.html',
    styleUrls: ['./cancellation-report.component.scss'],
})
export class CancellationReportComponent implements OnInit, OnDestroy {
    public cancellationReportHeaders: any = [];
    public displayData = false;
    public componentDestroyed$: Subject<boolean> = new Subject();
    constructor(private reportServiceRef: ReportsService) {}

    ngOnInit(): void {
        this.initialLoadingMethods();
    }
    public initialLoadingMethods() {
        this.reportServiceRef
            .getCancellationData()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((data) => {
                this.cancellationReportHeaders = data;
                this.displayData = true;
            });
    }
    public ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
    }
}
