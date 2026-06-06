import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from "../../../../shared/components/post-card/post-card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private postService = inject(PostService);

  // 1. Define posts as a writeable signal instead of a regular array
  posts = signal<any[]>([]);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (res: any) => {
        if (res && res.posts) {
          // 2. Update the signal value using .set()
          this.posts.set(res.posts);
          console.log('Posts loaded:', res);
        }
      },
      error: (err:any) => console.error(err)
    });
  }
}
