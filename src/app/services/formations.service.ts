import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Formation} from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  formations = [];

  apiUrl = 'http://localhost:3000/formations';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private Http: HttpClient) {
    this.formations = [];
  }

  getAllFormations(): Observable<Formation[]> {
    return this.Http.get<Formation[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = `Error Code: ${error.status}\,Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
