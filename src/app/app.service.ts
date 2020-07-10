import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/';

  downloadAng(): Observable<any> {
    return this.http.get(this.url + 'zipProject/CarRent', { responseType: 'blob' });
  }
}
