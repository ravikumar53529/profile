import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dailyreport } from '../interfaces/dailyreport';
import { ConsolidatedData } from '../interfaces/consolidateddata';
import { Customheaders } from '../interfaces/customheaders';
import { Consolidatedblocks } from '../interfaces/consolidatedblocks';

@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    public baseUrl = 'http://10.11.5.101:8081/api/admin/';
    public organizationData = 'assets/admin/data/user/organization.json';
    public userRoles = 'assets/admin/data/user/userroles.json';
    public countryCode = 'assets/admin/data/user/countrycode.json';
    public dailyReport = 'assets/admin/data/user/dailyreport.json';
    public consolidatedView = 'assets/admin/data/user/consolidatedview.json';
    public customizedHeaders =
        'assets/admin/data/consolidateddata/customizedheaders/headers.json';
    public consolidatedBlocks =
        'assets/admin/data/consolidateddata/customizedheaders/consolidatedblocks.json';
    public airlinebookingreportheaders =
        'assets/admin/data/reports/airlinesbookingreport/headers.json';
    public airlinesummaryReport =
        'assets/admin/data/reports/airlinessummary/airlinessummaryheaders.json';
    public pgWiseBookingSumaryHeaders =
        'assets/admin/data/reports/pgwisebookingsummary/pgwisebooking.json';
    public summaryReportHeaders =
        'assets/admin/data/reports/summaryreport/summaryreportheaders.json';
    public dashboardData = 'assets/admin/data/dashboard/dashboard.json';
    public allPermissionsData =
        'assets/admin/data/allpermissions/permissions.json';
    public permissionsSample =
        'assets/admin/data/allpermissions/permissionssample.json';
    public cancellationHeaders='assets/admin/data/reports/cancellation/cancellation-report.json';
    public pgWiseDetailHeaders='assets/admin/data/reports/pgwisebookingsummary/pgwise-detail.json';
    private eventSubject = new Subject<void>();
    public methodCalling$ = this.eventSubject.asObservable();
    constructor(private httpClientRef: HttpClient) {}

    // getting Daily Reports
    public gettingDailyReports(): Observable<Dailyreport[]> {
        return this.httpClientRef.get<Dailyreport[]>(this.dailyReport);
    }

    // getting consolidated view
    public gettingConsolidatedView(): Observable<ConsolidatedData[]> {
        return this.httpClientRef.get<ConsolidatedData[]>(
            this.consolidatedView
        );
    }

    // getting consolidated headers
    public gettingCustomizedHeaders(): Observable<Customheaders[]> {
        return this.httpClientRef.get<Customheaders[]>(this.customizedHeaders);
    }

    // getting consolidatedBlocks
    public gettingConsolidatedBlocks(): Observable<Consolidatedblocks[]> {
        return this.httpClientRef.get<Consolidatedblocks[]>(
            this.consolidatedBlocks
        );
    }

    // getting dashboard data
    public gettingDashboardData(): Observable<any> {
        return this.httpClientRef.get<any>(this.dashboardData);
    }

    // getting airlinebookingreportheaders
    public gettingairlineBookingReportHeaders(): Observable<Customheaders[]> {
        return this.httpClientRef.get<Customheaders[]>(
            this.airlinebookingreportheaders
        );
    }
    // getting airlines summary report
    public gettingAirlinesSummaryReport(): Observable<Customheaders[]> {
        return this.httpClientRef.get<Customheaders[]>(
            this.airlinesummaryReport
        );
    }

    // getting pg wise summary report
    public gettingPgWiseSummaryHeaders(): Observable<Customheaders[]> {
        return this.httpClientRef.get<Customheaders[]>(
            this.pgWiseBookingSumaryHeaders
        );
    }
    // getting summary report headers
    public gettingSummaryReportHeaders(): Observable<Customheaders[]> {
        return this.httpClientRef.get<Customheaders[]>(
            this.summaryReportHeaders
        );
    }

    // getting all permissions data
    public gettingAllPermissions(): Observable<any> {
        return this.httpClientRef.get<any>(this.allPermissionsData);
    }
    // getting All permissions sample
    public gettingAllPermissionsSample(): Observable<any> {
        return this.httpClientRef.get<any>(this.permissionsSample);
    }
    // trigger event
    public triggerEvent(): void {
        this.eventSubject.next();
    }
    public getCancellationData():Observable<any>{
        return this.httpClientRef.get(this.cancellationHeaders)
    }
    public getPgWiseDetailHeaders():Observable<any>{
        return this.httpClientRef.get(this.pgWiseDetailHeaders)
    }
}
