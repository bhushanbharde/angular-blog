import { Component, signal } from '@angular/core';
import { TagService } from '../../../core/services/tag.service';
import { ActivatedRoute, RouterLink, RouterLinkWithHref } from "@angular/router";
import { ArticleCardComponent } from "../../../shared/components/article-card/article-card.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-tag',
  imports: [ArticleCardComponent, FaIconComponent, NgClass, CommonModule, RouterLinkWithHref, ButtonComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  tags = signal<any>(null);
  posts = signal<any>(null);
  faCircle = faCircle
  activeTag = signal('');

  constructor(private tagService: TagService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    // this.activeTag.set(slug)

    this.getTagBySlug(slug)
    this.loadTags()
  }

  getTagBySlug(slug: any) {
    this.posts.set(null)
    this.activeTag.set(slug)

    this.tagService.getTagBySlug(slug).subscribe({
      next: (response: any) => {
        // console.log(response)
        if (response) {
          this.posts.set(response[0]?.posts)
        }
      }
    })
  }

  loadTags() {
    this.tagService.getTags().subscribe({
      next: (response: any) => {
        // console.log(response);
        this.tags.set(response);
      },
      error: (err) => console.log(err)
    })
  }
}
