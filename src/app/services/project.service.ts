import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseList } from '../model/database.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  GetDatabaseList(): Observable<DatabaseList> {
    return this.http.get('./assets/data/databases.json')
    .map(response => response as DatabaseList);
  }

  dailyForecast() {
    return this.http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }
}
