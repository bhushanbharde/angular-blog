import { Component, inject, signal } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { CommentComponent } from "../../../../shared/components/comment/comment.component";
import { ArticleCardComponent } from "../../../../shared/components/article-card/article-card.component";
import { ActivatedRoute, RouterLinkWithHref } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faCirclePlay, faComment, faHeart, faRetweet, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { StripTagsPipe } from '../../../../core/pipes/strip-tags-pipe';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { DecimalPipe, DatePipe } from '@angular/common';
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLinkWithHref, FaIconComponent, StripTagsPipe, ButtonComponent, DecimalPipe, DatePipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  faBookmark = faBookmark;
  faCirclePlay = faCirclePlay;
  faShareNodes = faShareNodes;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faComment = faComment;
  faCircle = faCircle;
  postDetails = signal<any>(null);

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails(): void {
    const postId: number = +this.route.snapshot.paramMap.get('id')! || 0; // Get the post ID from the route parameter, default to 0 if not found
    
    this.postService.getPost(postId).subscribe({
      next: (res) => {
        // Handle the response and display the post details
        console.log(res);
        this.postDetails.set(res); // Update the signal with the post details, default to null if not found
      },
      error: (err) => console.error(err)
    });
  }
}
