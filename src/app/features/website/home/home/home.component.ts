import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  posts: any[] = [];

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data: any) => {
        if(data && data.posts) {
          this.posts = Object.values(data.posts);
        }
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }
}
