import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AlertComponent } from "../../../../shared/components/alert/alert.component";
import { TextareaComponent } from "../../../../shared/components/textarea/textarea.component";

@Component({
  selector: 'app-post-create',
  imports: [InputComponent, ButtonComponent, AlertComponent, ReactiveFormsModule, TextareaComponent],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private fb = inject(FormBuilder)
  message = signal('');

  postForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    cover_image: ['', [Validators.required]]
  });

  ngOnInit() {
    
  }

  get f() { return this.postForm.controls; }

  onSubmit() {
    //validations
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    console.log(this.postForm.value);

    this.postService.createPost(this.postForm.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
          this.message.set('Post created successfully!');
          this.postForm.reset();
        }
      },
      error: (err) => console.log(err)
    })
    

  }


}
