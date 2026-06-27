import { Component, inject, signal } from '@angular/core';
import { AlertComponent } from "../../../../../shared/components/alert/alert.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { TagService } from '../../../../../core/services/tag.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-create',
  imports: [AlertComponent, InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './tag-create.component.html',
  styleUrl: './tag-create.component.css',
})
export class TagCreateComponent {
  private fb = inject(FormBuilder)
  private tagService = inject(TagService)
  private route = inject(ActivatedRoute)

  message = signal('')
  buttonTitle = 'Create Tag';
  editMode = false;
  pageHeading = 'Create New Tag';
  tagId: any = null;
  tag = signal(null);

  form: FormGroup = this.fb.group({
    tag_name: ['', [Validators.required, Validators.minLength(2)]]
  })

  ngOnInit() {
    this.tagId = this.route.snapshot.paramMap.get('id');
    if (this.tagId) {
      this.editMode = true;
      this.loadTag(this.tagId);
      this.pageHeading = 'Edit Tag'
      this.buttonTitle = 'Save'
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value)

    if (this.editMode) {
      this.tagService.updateTag(this.tagId, this.form.value).subscribe({
        next: (response: any) => {
          console.log(response)
          this.message.set('Saved successfully!')
        },
        error: (err) => console.log(err)
      })
    }
    else {
      this.tagService.createTag(this.form.value).subscribe({
        next: (response: any) => {
          console.log(response)
          this.message.set('Tag created successfully!')
          this.form.reset()
        },
        error: (err) => console.log(err)
      })
    }

  }

  loadTag(tagId:any) {
    this.tagService.getTag(tagId).subscribe({
      next: (response: any) => {
        this.form.patchValue({
          tag_name: response?.name
        })
      },
      error: (err) => console.log(err)
    })
  }
}
