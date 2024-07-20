import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ReportsService } from '../../../airlinebooking/services/reports.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public destroyed$=new Subject();
  public dashboardData:any[]=[];
  public bookingsData:any[]=[];
  public lineData:any;
  public lineOptions:any;
  public lineData2:any
  constructor(
    private reportsServiceRef:ReportsService,
  ){
  }
  public ngOnInit(): void {
    this.initialLoadingMethods()
    this.airlinesGraph()
  }

  public initialLoadingMethods():void{
   this.reportsServiceRef.gettingDashboardData().pipe(takeUntil(this.destroyed$)).subscribe({
    next:(response)=>{
       this.dashboardData=response;
       this.bookingsData=this.dashboardData[0].bookings;
    }
   })
  }
//   graph of ailines 
  public airlinesGraph():void{
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Total Airlines',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              backgroundColor: documentStyle.getPropertyValue('--primary-500'),
              borderColor: documentStyle.getPropertyValue('--primary-500'),
              tension: .4
          },
          {
              label: 'Total Admin Users',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              backgroundColor: documentStyle.getPropertyValue('--primary-200'),
              borderColor: documentStyle.getPropertyValue('--primary-200'),
              tension: .4
          }
      ]
  };
  //   Data for the bookiing graph
  this.lineData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Total Bookings',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
            borderColor: documentStyle.getPropertyValue('--primary-500'),
            tension: .4
        },
        {
            label: 'Total Bookings Approved',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-200'),
            borderColor: documentStyle.getPropertyValue('--primary-200'),
            tension: .4
        },
        {
          label: 'Total Pedning Bookings',
          data: [21, 43, 34, 16, 16, 37, 39],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          tension: .4
      },
      {
        label: 'Total Cancelled Bookings',
        data: [32, 41, 34, 20, 34, 23, 50],
        fill: false,
        backgroundColor: documentStyle.getPropertyValue('--primary-200'),
        borderColor: documentStyle.getPropertyValue('--primary-200'),
        tension: .4
    }
    ]
};
  this.lineOptions = {
      plugins: {
          legend: {
              labels: {
                  fontColor: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          
      }
  };

  }
  // Unsubscribing the data 
  public ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }
}
