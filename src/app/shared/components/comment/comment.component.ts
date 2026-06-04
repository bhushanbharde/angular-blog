import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comment',
  imports: [FaIconComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input() comment: any;
  faHeart = faHeart;
  faComment = faComment;
}
