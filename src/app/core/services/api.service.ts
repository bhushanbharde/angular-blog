import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root', // make the service available throughout the application
})
export class ApiService {

  constructor(private http: HttpClient) {}
  
  // Example method to make a GET request
  get(url: string, params:any = {}) {
    // console.log(`${environment.apiUrl}/${url}`);
    return this.http.get(`${environment.apiUrl}/${url}`, {params});
  }
  
  // Example method to make a POST request
  post(url: string, body: any) {
    // console.log(body, `${environment.apiUrl}/${url}`);
    return this.http.post(`${environment.apiUrl}/${url}`, body);
  }

  put(url: string, body: any) {
    console.log(`${environment.apiUrl}/${url}`);
    return this.http.put(`${environment.apiUrl}/${url}`, body);
  }

  delete(url: string) {
    return this.http.delete(`${environment.apiUrl}/${url}`);
  }


  
}
