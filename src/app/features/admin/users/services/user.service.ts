import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private apiService: ApiService) { }
  
  getUsers(): Observable<any> {
    return this.apiService.get('users');
  }

  createUser(payload:any): Observable<any> {
    return this.apiService.post('users', payload);
  }

  getUser(id: number): Observable<any> {
    return this.apiService.get(`users/${id}`);
  }

  updateUser(id: number, payload:any): Observable<any> {
    return this.apiService.put(`users/${id}`, payload)
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.delete(`users/${id}`);
  }
}
