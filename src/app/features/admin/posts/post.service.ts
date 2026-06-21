import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apiService: ApiService) {
    
  }
  getAllPosts() {
    return this.apiService.get('posts');
  }
}
