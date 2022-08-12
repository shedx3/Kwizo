import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {
  private baseUrl = 'https://62f65626612c13062b4c2bca.mockapi.io';
  constructor(private httpclient: HttpClient) {}

  public get(path: string, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpclient.get(path);
  }

  public post(path: string, data: any, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpclient.post(path, data || {});
  }

  public put(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpclient.put(path, data || {});
  }

  public patch(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpclient.patch(path, data || {});
  }
  public delete(path: string): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpclient.delete(path);
  }
}
