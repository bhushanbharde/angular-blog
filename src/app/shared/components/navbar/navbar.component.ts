import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {User} from '../../../core/models/user.model';
import { Observable } from 'rxjs';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { TagService } from '../../../core/services/tag.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FaIconComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  currentUser: any;
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;
  isAdminUser = false;
  avatar = signal('');
  topTag = signal('')

  constructor(public authService: AuthService, private router: Router, private tagService: TagService) {
    this.isAdminUser = authService.isAdmin();
    this.currentUser = authService.fetchCurrentUser();
    // console.log(this.currentUser);
  }

  ngOnInit() {
    this.getUser()
    this.topTags()
  }

  getUser() {
    this.authService.getCurrentUser().subscribe({
      next: (res: any) => {
        if (res) {
          this.avatar.set(res?.user?.avatar);
        }
      },
      error: err => console.log(err)
    })
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
    this.router.navigate(['auth/login']);
  }

  topTags() {
    this.tagService.getHotTag().subscribe({
      next: (response:any) => {
        // console.log(response);
        this.topTag.set(response?.tags[0]?.shortname)
      },
      error: err => console.log(err)
      
    })
  }

}

