import { Injectable } from '@angular/core';
import { Visitor } from '../models/Visitor';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  visitorUrl: string = "https://s3.eu-west-2.amazonaws.com/sample-sray-logs-coding-interview/sray-logs.json";
  constructor(private http:HttpClient) { }
  getVisitorsData(): Observable<any> {
    return this.http.get(this.visitorUrl);
  } 
}
