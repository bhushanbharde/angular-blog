import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ButtonComponent } from "../../../../../shared/components/button/button.component";
import { UserService } from '../../services/user.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink, ButtonComponent, FaIconComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  user = signal<any>(null);

  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  showDeleteModal = signal<boolean>(false);
  faXmark = faXmark;

  ngOnInit(): void {
    this.loadUserDetail();
  }

  loadUserDetail(): void {
    const userId: number = +this.route.snapshot.paramMap.get('id')! || 0;
    this.userService.getUser(userId).subscribe({
      next: (response:any) => {
        if (response) {
          this.user.set(response?.user[0]);
          // console.log(this.user());
        }
      },
      error: (err) => console.error(err)
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: (response) => {
        if (response) {
          console.log(response);
          this.router.navigate(['/admin/users']);
        }
      },
      error: (err) => console.log(err)
    })
  }

  onDelete() {
    this.showDeleteModal.set(true);
  }

  closeModal() {
    this.showDeleteModal.set(false);
  }
}
