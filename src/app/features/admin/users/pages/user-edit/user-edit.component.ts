import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertComponent } from "../../../../../shared/components/alert/alert.component";
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule, AlertComponent, ButtonComponent, InputComponent, RouterLink],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  message = signal<string>('');
  errorType = signal<string>('info');
  userId: number = +this.route.snapshot.paramMap.get('id')! || 0;


  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    avatar: [''],
    bio: ['', [Validators.required, Validators.maxLength(500)]]
  });

  // 2. Helper getter methods to keep your HTML clean
  get f() { return this.userForm.controls; }

  ngOnInit(): void {
    this.loadUser(this.userId);
  }

  loadUser(userId:number): void {
    this.userService.getUser(userId).subscribe({
      next: (response: any) => {
        if (response) {
          const userData = response?.user[0];

          //patch values
          this.userForm.patchValue({
            name: userData?.name,
            email: userData?.email,
            avatar: userData?.avatar,
            bio: userData?.bio
          });
        }
      },
      error: (err) => console.log(err)
    })
  }

  onSubmit(): void {
    //validations
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    // API call for user update
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          if (response?.message?.index == 'users_email_unique') {
            this.message.set("Email Id already exists!");
            this.errorType.set('error');
          }
          else {
            this.message.set(response?.message);
          }
        }
      },
      error: (err) => console.log(err)
    });
  }
}
