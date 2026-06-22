import { Component, signal } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user = signal<User | null>(null);

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe({
      next: res => {
        console.log(res)
        if (res) {
          this.user.set(res?.user);
        }
      },
      error: err => console.log(err)
    })
  }
}
