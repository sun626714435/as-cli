import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor(private http: HttpClient) {}
  getMenu(): Observable<any> {
    return this.http.post(`api/app/menu`, null);
  }

  getData(): Observable<any> {
    return this.http.post(`api/app/list`, null);
  }

  delData(): Observable<any> {
    return this.http.post(`api/demo/delete`, null);
  }
}
