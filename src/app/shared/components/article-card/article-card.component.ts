import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StripTagsPipe } from '../../../core/pipes/strip-tags-pipe';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faHeart, faComment, faCircle, faRetweet, faBookmark, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [DatePipe, StripTagsPipe, FaIconComponent, RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  @Input() article: any;
  @Input() user: any;

  faHeart = faHeart;
  faComment = faComment;
  faCircle = faCircle;
  faRetweet = faRetweet;
  faBookmark = faBookmark;
  faShareNodes = faShareNodes;
}
