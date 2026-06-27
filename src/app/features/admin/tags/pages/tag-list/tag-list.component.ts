import { Component, signal } from '@angular/core';
import { ApiService } from '../../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { TagService } from '../../../../../core/services/tag.service';
import { AlertComponent } from "../../../../../shared/components/alert/alert.component";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-tag-list',
  imports: [ButtonComponent, AlertComponent, RouterLinkWithHref],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export class TagListComponent {

  tags = signal<any>([]);
  message = signal('')

  constructor(private tagService: TagService) {
    
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe({
      next: (response: any) => {
        // console.log(response);
        this.tags.set(response);
      },
      error: (err) => console.log(err)
    });
  }
}
