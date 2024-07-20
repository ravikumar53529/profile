import { Component, OnInit } from '@angular/core';
import { Customheaders } from '../../interfaces/customheaders';
import { ReportsService } from '../../services/reports.service';

@Component({
    selector: 'app-pgwisebooking',
    templateUrl: './pgwisebooking.component.html',
    styleUrls: ['./pgwisebooking.component.scss'],
})
export class PgwisebookingComponent implements OnInit {
    public pgWiseHeaders: Customheaders[] = [];
    public displayData = false;

    constructor(private reportsServiceRef: ReportsService) {}

    public ngOnInit(): void {
        this.initialLoadingMethods();
    }

    public initialLoadingMethods(): void {
        this.gettingPgwiseHeaders();
    }

    //  Getting pgwise booking custom headers
    public gettingPgwiseHeaders(): void {
        this.reportsServiceRef.gettingPgWiseSummaryHeaders().subscribe({
            next: (response) => {
                this.pgWiseHeaders = response;
                this.displayData = true;
            },
        });
    }
}
