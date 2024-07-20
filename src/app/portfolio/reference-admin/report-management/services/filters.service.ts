import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FiltersService {
	constructor(private http: HttpClient) { }
	
	getData() {
		return this.http.get<any>('assets/admin/data/filters/filters.json');
	}
	getFilterdInputFields() {
		return this.http.get<any>('assets/admin/data/user/filters.json')
	}
}