import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from "@angular/router";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AlertComponent } from "../../../../shared/components/alert/alert.component";
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  imports: [RouterLinkWithHref, ButtonComponent, AlertComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {

  currentPage: number = 1;
  perPage: number = 10;
  totalPosts: number = 0;
  lastPage: number = 1;
  visiblePages: number[] = [];


  posts = signal<any>(null);
  postService = inject(PostService);
  message = signal('');

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAdminPosts(this.currentPage, this.perPage).subscribe({
      next: (response) => {
        if (response) {
          this.posts.set(response?.posts?.data);
          this.currentPage = response?.posts?.current_page;
          this.totalPosts = response?.posts?.total;
          this.lastPage = response?.posts?.last_page;
          console.log(response.posts);
        }
      },
      error: (err) => console.log(err)
    })
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.lastPage) {
      this.currentPage = page;
      this.loadPosts();
    }
  }
}
