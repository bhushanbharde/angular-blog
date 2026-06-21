import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagServiceService {
  constructor(private http: HttpClient) { }
  
  getTags() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
