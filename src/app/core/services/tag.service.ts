import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private apiService: ApiService) { }
  
  getTags() {
    return this.apiService.get('tags');
  }

  getTag(id: number) {
    return this.apiService.get(`tags/${id}`);
  }

  getTagBySlug(slug: string) {
    return this.apiService.get(`tag/${slug}`);
  }

  createTag(data:any) {
    return this.apiService.post('tags', data);
  }

  updateTag(id:number, data:any) {
    return this.apiService.put(`tags/${id}`, data);
  }

  getHotTag() {
    return this.apiService.get('top-tags');
  }
}
