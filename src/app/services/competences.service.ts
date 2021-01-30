import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Competences} from '../models/competences';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  competences = [];

  apiUrl = 'http://localhost:3000/competences';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private Http: HttpClient) {
    this.competences = [];
  }

  getAllCompetences(): Observable<Competences[]> {
    return this.Http.get<Competences[]>(this.apiUrl)
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
