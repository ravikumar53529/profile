import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-pgwise-detail',
    templateUrl: './pgwise-detail.component.html',
    styleUrls: ['./pgwise-detail.component.scss'],
})
export class PgwiseDetailComponent implements OnInit, OnDestroy {
    public pgWiseDetailReportHeaders: any = [];
    public displayData = false;
    public componentDestroyed$: Subject<boolean> = new Subject();
    constructor(private reportServiceRef: ReportsService) {}

    ngOnInit(): void {
        this.initialLoadingMethods();
    }
    public initialLoadingMethods() {
        this.reportServiceRef
            .getPgWiseDetailHeaders()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((data) => {
                this.pgWiseDetailReportHeaders = data;
                this.displayData = true;
            });
    }
    public ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
    }
}
