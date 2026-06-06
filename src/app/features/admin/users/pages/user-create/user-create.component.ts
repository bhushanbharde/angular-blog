import { Component, inject, signal } from '@angular/core';
import { InputComponent } from "../../../../../shared/components/input/input.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { AlertComponent } from "../../../../../shared/components/alert/alert.component";

@Component({
  selector: 'app-user-create',
  imports: [InputComponent, CommonModule, ButtonComponent, ReactiveFormsModule, AlertComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  message = signal<string>('');
  errorType = signal<string>('info');

  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    avatar: [''],
    bio: ['', [Validators.required, Validators.maxLength(500)]]
  });

  // 2. Helper getter methods to keep your HTML clean
  get f() { return this.userForm.controls; }

  onSubmit(): void {
    //validations
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    // API call
    this.userService.createUser(this.userForm.value).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          if (response?.message?.index == 'users_email_unique') {
            this.message.set("Email Id already exists!");
            this.errorType.set('error');
          }
          else {
            this.userForm.reset();
            this.message.set(response?.message);
          }
        }
      },
      error: (err) => console.log(err)
    });
  }
}
