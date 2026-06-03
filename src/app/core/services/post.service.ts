import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private apiService: ApiService) { }

  getPosts() {
    return this.apiService.get('');
  }

  getPost(id: number) {
    return this.apiService.get(`posts/${id}`);
  }

  createPost(post: any) {
    return this.apiService.post('posts', post);
  }

  updatePost(id: number, post: any) {
    return this.apiService.put(`posts/${id}`, post);
  }

  deletePost(id: number) {
    return this.apiService.delete(`posts/${id}`);
  }
}
