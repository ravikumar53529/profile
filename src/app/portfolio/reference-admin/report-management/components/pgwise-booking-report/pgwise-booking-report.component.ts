import { Component } from '@angular/core';
import { Customheaders } from '../../interfaces/customheaders';

import { Subject, takeUntil } from 'rxjs';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-pgwise-booking-report',
  templateUrl: './pgwise-booking-report.component.html',
  styleUrls: ['./pgwise-booking-report.component.scss']
})
export class PgwiseBookingReportComponent {
  public pgWiseHeaders: Customheaders[] = [];
  public displayData = false;
  public componentDestroyed$: Subject<boolean> = new Subject();
  constructor(private reportsServiceRef: ReportsService) {}

  public ngOnInit(): void {
      this.initialLoadingMethods();
  }

  public initialLoadingMethods(): void {
      this.gettingPgwiseHeaders();
  }

  //  Getting pgwise booking custom headers
  public gettingPgwiseHeaders(): void {
      this.reportsServiceRef.gettingPgWiseSummaryHeaders().pipe(takeUntil(this.componentDestroyed$)).subscribe({
          next: (response) => {
              this.pgWiseHeaders = response;
              this.displayData = true;
          },
      });
  }
  public ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
}
}
