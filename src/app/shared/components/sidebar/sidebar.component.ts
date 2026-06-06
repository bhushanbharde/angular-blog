import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  private postsService = inject(PostService);

  posts = signal<any[]>([]);
  recommendedTopics = signal<any[]>([]);
  users = signal<any[]>([]);

  ngOnInit(): void {
    // Fetch data for staff picks and popular authors here
    this.loadStaffPicks();
    this.loadRecommendedTopics();
    this.loadUsers();
  }

  loadStaffPicks(): void {
    // Implement logic to fetch staff picks from the backend
    this.postsService.getStaffPicks().subscribe((data) => {
      this.posts.set(data?.posts);
    });
  }

  loadRecommendedTopics(): void {
    this.postsService.getRecommendedTopics().subscribe((data) => {
      this.recommendedTopics.set(data?.tags);
    });
  }

  loadUsers(): void {
    this.postsService.getUsers().subscribe((data) => {
      this.users.set(data?.authors);
    });
  }
}
