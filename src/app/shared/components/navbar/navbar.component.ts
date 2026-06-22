import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {User} from '../../../core/models/user.model';
import { Observable } from 'rxjs';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  currentUser$: any;
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;

  constructor(private authService: AuthService, private router: Router) {
    
  }


  logout(): void {
    // Optional: call Laravel's logout endpoint to invalidate server-side token
    this.authService.logoutApi().subscribe({
      complete: () => this.clearAndRedirect(),
      error: () => this.clearAndRedirect(),  // ✅ Always clear locally even if API fails
    });
  }

  private clearAndRedirect(): void {
    this.authService.logout();               // Clears token + BehaviorSubject
    this.router.navigate(['/login']);
  }

}
function toSignal<T>(arg0: Observable<User | null>): any {
  throw new Error('Function not implemented.');
}

