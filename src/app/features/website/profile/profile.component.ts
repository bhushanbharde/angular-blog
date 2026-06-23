import { Component, signal } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../../core/models/user.model';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  imports: [ButtonComponent, NavbarComponent, FaIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user = signal<User | null>(null);
  faPencil = faPencil

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe({
      next: res => {
        // console.log(res)
        if (res) {
          this.user.set(res?.user);
        }
      },
      error: err => console.log(err)
    })
  }
}
