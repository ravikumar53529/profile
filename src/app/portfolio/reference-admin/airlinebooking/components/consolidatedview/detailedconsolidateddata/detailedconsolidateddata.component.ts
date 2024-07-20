import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsolidatedData } from '../../../interfaces/consolidateddata';
import { ReportsService } from '../../../services/reports.service';

@Component({
    selector: 'app-detailedconsolidateddata',
    templateUrl: './detailedconsolidateddata.component.html',
    styleUrls: ['./detailedconsolidateddata.component.scss'],
})
export class DetailedconsolidateddataComponent implements OnInit {
    public transactionId = 0;
    public consolidatedData!: ConsolidatedData;
    public detailedData!: ConsolidatedData;
    public textArea = false;
    public consolidatedType = '';
    public detailedTitle = '';
    constructor(
        private reportsServiceRef: ReportsService,
        private routeRef: ActivatedRoute,
        private routerRef: Router
    ) {}
    public ngOnInit(): void {
        this.intialLoadingMethods();
    }

    public intialLoadingMethods(): void {
        this.gettiingRouteValues();
        this.gettingConsolidatedData();
    }

    public gettiingRouteValues(): void {
        this.routeRef.params.subscribe((params) => {
            this.transactionId = params['transactionid'];
            this.consolidatedType = params['type'];
            // Enable Editable Text Area
            this.makeEditableTextAreaVisible();
        });
    }
    // getting consolidated data
    public gettingConsolidatedData(): void {
        this.reportsServiceRef.gettingConsolidatedView().subscribe({
            next: (response) => {
                this.consolidatedData = response[0];
                this.consolidatedData.consolidatedview.filter((data: any) => {
                    if (
                        this.consolidatedType ===
                        Object.keys(data)[0].toLowerCase()
                    ) {
                        this.detailedTitle = data.title;
                        const details = data[Object.keys(data)[0]];
                        this.detailedData = details;
                    }
                });
            },
        });
    }

    // Editable text area
    public makeEditableTextAreaVisible(): void {
        if (this.consolidatedType === 'transactionhistory') {
            this.textArea = true;
        }
    }
    // Back to consolidated view
    public backToConsolidatedView(): void {
        const url = `/admin/airline-booking/consolidated-view/transaction/${this.transactionId}`;
        this.routerRef.navigate([url]);
    }
    // Adding space between words
    public formatKey(key: string): string {
        return key
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}
