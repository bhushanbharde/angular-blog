import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private apiService: ApiService) { }

  getPosts():Observable<any> {
    return this.apiService.get('posts');
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
