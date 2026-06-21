import { Component, signal } from '@angular/core';
import { ApiService } from '../../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TagServiceService } from '../../tag-service.service';

@Component({
  selector: 'app-tag-list',
  imports: [],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css',
})
export class TagListComponent {

  tags = signal<any>([]);

  constructor(private tagService: TagServiceService) {
    
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe({
      next: (response: any) => {
        console.log(response);
        this.tags.set(response);
      },
      error: (err) => console.log(err)
    });
  }
}
