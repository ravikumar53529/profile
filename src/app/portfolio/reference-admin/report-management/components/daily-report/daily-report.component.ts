import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Customheaders } from '../../interfaces/customheaders';
import { ReportsService } from '../../services/reports.service';

@Component({
    selector: 'app-daily-report',
    templateUrl: './daily-report.component.html',
    styleUrls: ['./daily-report.component.scss'],
})
export class DailyReportComponent {
    public filterForm!: FormGroup;
    public customizedHeadersSubscription$!: Subscription;
    public displayData = false;
    public customizedHedersCheckboxes: Customheaders[] = [];

    constructor(
        private fb: FormBuilder,
        private reportsServiceRef: ReportsService
    ) {
        //initialize the  filter form
        this.filterForm = this.fb.group({});
    }

    public ngOnInit(): void {
        // Initial Loading methods
        this.initialLoadingMethods();
    }

    public initialLoadingMethods() {
        this.addingDefaultHeaders();
    }

    // adding deafult headers
    public addingDefaultHeaders(): void {
        this.customizedHeadersSubscription$ = this.reportsServiceRef
            .gettingCustomizedHeaders()
            .subscribe((data: Customheaders[]) => {
                this.customizedHedersCheckboxes = data;
                this.displayData = true;
            });
    }

    // Destroying customized headers data
    public ngOnDestroy(): void {
        this.customizedHeadersSubscription$.unsubscribe();
    }
}
