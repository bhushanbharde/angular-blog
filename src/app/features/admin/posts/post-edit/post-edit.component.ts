import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AlertComponent } from "../../../../shared/components/alert/alert.component";
import { InputComponent } from "../../../../shared/components/input/input.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from "../../../../shared/components/textarea/textarea.component";

@Component({
  selector: 'app-post-edit',
  imports: [ButtonComponent, RouterLink, AlertComponent, InputComponent, ReactiveFormsModule, TextareaComponent],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private fb = inject(FormBuilder)
  postDetails = signal<any>(null);
  message = signal('');
  postId: number = 0;
  enableSaveButton = signal(false);

  postForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    cover_image: ['', [Validators.required]]
  });

  ngOnInit() {
    this.getPostDetails()
  }

  get f() { return this.postForm.controls; }

  getPostDetails(): void {
    const postId: number = +this.route.snapshot.paramMap.get('id')! || 0;
    this.postId = postId;

    this.postService.getPost(postId).subscribe({
      next: (res) => {
        console.log(res);
        const data = (res as any)?.post;
        this.postForm.patchValue({
          title: data?.title,
          content: data?.content,
          cover_image: data?.cover_image,
        })
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched()
      return;
    }
    if (this.postForm.dirty) {
      // this.enableSaveButton = true;
    }

    this.postService.updatePost(this.postId, this.postForm.value).subscribe({
      next: (response) => {
        console.log(response)
        if (response) {
          this.message.set('Post updated successfully!')
        }
      },
      error: (err) => console.log(err)
    })
  }
}
