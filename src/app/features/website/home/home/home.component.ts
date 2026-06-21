import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from "../../../../shared/components/post-card/post-card.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, PostCardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private postService = inject(PostService);

  posts = signal<any[]>([]);
  currentPage: number = 1;
  perPage: number = 10;
  totalPosts: number = 0;
  lastPage: number = 1;

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts(this.currentPage, this.perPage).subscribe({
      next: (res: any) => {
        if (res && res.posts) {
          // 2. Update the signal value using .set()
          this.posts.set(res.posts?.data);
          this.currentPage = res?.posts?.current_page;
          this.totalPosts = res?.posts?.total;
          this.lastPage = res?.posts?.last_page;
          // console.log('Posts loaded:', res);
        }
      },
      error: (err:any) => console.error(err)
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.lastPage) {
      this.currentPage = page;
      this.loadPosts();
    }
  }
}
