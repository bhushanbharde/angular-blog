import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBookmark, faCirclePlay, faShareNodes, faRetweet, faHeart, faComment, faCircle} from "@fortawesome/free-solid-svg-icons";
import { StripTagsPipe } from "../../../core/pipes/strip-tags-pipe";
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CommentComponent } from '../../../shared/components/comment/comment.component';
import { InputComponent } from "../../../shared/components/input/input.component";
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RouterLink, FaIconComponent, StripTagsPipe, ButtonComponent, CommentComponent, InputComponent, ArticleCardComponent
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  private postService = inject(PostService);
  private route = inject(ActivatedRoute);

  faBookmark = faBookmark;
  faCirclePlay = faCirclePlay;
  faShareNodes = faShareNodes;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faComment = faComment;
  faCircle = faCircle;
  postDetails = signal<any>(null);
  
  ngOnInit(): void {
    // Logic to fetch and display the blog post details based on the route parameter (e.g., post ID or slug)

    this.getPostDetails();
  }

  getPostDetails(): void {
    const postId: number = +this.route.snapshot.paramMap.get('id')! || 0; // Get the post ID from the route parameter, default to 0 if not found
    
    this.postService.getPost(postId).subscribe({
      next: (res) => {
        // Handle the response and display the post details
        // console.log(res);
        this.postDetails.set(res); // Update the signal with the post details, default to null if not found
        console.log(this.postDetails());
      },
      error: (err) => console.error(err)
    });
  } 
}
