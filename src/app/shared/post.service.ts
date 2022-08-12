import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createQuestion() {
    // this.http.post<>('');
  }

  fectchQuestion() {
    // this.http.get<>()
  }
}
