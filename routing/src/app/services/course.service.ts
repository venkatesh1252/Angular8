import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDepartments } from '../interfaces/departmets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url: string = '/assets/data/depaetmentsList.json';

  constructor(private http: HttpClient) { }

  getCousesList(): Observable<IDepartments[]> {
    return this.http.get<IDepartments[]>(this._url);
  }
}
