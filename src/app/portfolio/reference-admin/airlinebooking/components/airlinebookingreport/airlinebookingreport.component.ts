import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Customheaders } from '../../interfaces/customheaders';
import { ReportsService } from '../../services/reports.service';



@Component({
  selector: 'app-airlinebookingreport',
  templateUrl: './airlinebookingreport.component.html',
  styleUrls: ['./airlinebookingreport.component.scss']
})
export class AirlinebookingreportComponent implements OnInit, OnDestroy {
  public currentHeaders: Customheaders[] = []
  public displayData = false;
  public componentDestroyed$: Subject<boolean> = new Subject();
  constructor(private reportsService: ReportsService) {

  }
  public ngOnInit(): void {
    this.initialLoadingMethods()
  }

  public initialLoadingMethods(): void {
    this.gettingCustomizableCheckBoxes()
  }

  // getting customized headings for the airline booking report
  public gettingCustomizableCheckBoxes(): void {
    this.reportsService.gettingairlineBookingReportHeaders().pipe(takeUntil(this.componentDestroyed$)).subscribe({
      next: (response) => {
        this.currentHeaders = response
        this.displayData = true
      }
    })
  }

  // Unsubscribe the data 
  public ngOnDestroy(): void {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
