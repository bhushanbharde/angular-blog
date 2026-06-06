import { Component, signal, inject } from '@angular/core';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { AlertComponent } from "../../../../../shared/components/alert/alert.component";
import { UserService } from '../../services/user.service';
import { RouterLinkWithHref } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [ButtonComponent, AlertComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = signal<any[]>([]);
  message = signal('');


  private userService = inject(UserService);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        if (response) {
          this.users.set(response?.users);          
        }
      },
      error: (err) => console.error(err)
    });
  }
}
