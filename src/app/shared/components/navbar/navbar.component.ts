import { Component } from '@angular/core';
import { Auth } from "../../../core/services/auth";
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {User} from '../../../core/models/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  currentUser$: any;

  constructor(private authService: Auth, private router: Router) {
    
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

