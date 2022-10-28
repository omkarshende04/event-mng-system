import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURL = "http://localhost:8080/api/v1/test";

  constructor( private httpClient: HttpClient) { }

  getTestList():Observable<Test[]>{
    return this.httpClient.get<Test[]>(`${this.baseURL}`);
  }
}
