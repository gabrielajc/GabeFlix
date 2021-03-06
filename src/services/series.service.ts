import { API_PATH } from './../environments/environment';
import { SeriesModel } from './../models/series.model';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

constructor(private http: HttpClient) { }

public getInfo(): Observable<SeriesModel> {
return this.http.get<SeriesModel>(`${API_PATH}`)
}

public getAbout() {
  return this.http.get<SeriesModel>(`${API_PATH}about`).toPromise();
}

public getPhotos() {
  return this.http.get<SeriesModel>(`${API_PATH}uploads`)
}

public getTitles() {
  return this.http.get<SeriesModel>(`${API_PATH}titulos`)
}

}
