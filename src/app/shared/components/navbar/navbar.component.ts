import { Component } from '@angular/core';
import { Auth } from "../../../core/services/auth";
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  constructor(private authService: Auth) {
    
  }


  logout(): void {
    this.authService.logout();
  } 

}
function toSignal<T>(arg0: Observable<User | null>): any {
  throw new Error('Function not implemented.');
}

