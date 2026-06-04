import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StripTagsPipe } from "../../../core/pipes/strip-tags-pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faComment, faRetweet, faCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, StripTagsPipe, FontAwesomeModule, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  // 1. Declare the @Input property to accept a single post object
  // 2. The '?' makes it safe in case data arrives late
  @Input() post: any;

  faHeart = faHeart;
  faComment = faComment;
  faRetweet = faRetweet;
  faCircle = faCircle;
}
