import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faUser, faUsers, faHouse, faTag, faGear, faFileLines, faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-admin-menu',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css',
})
export class AdminMenuComponent {
  faUser = faUser;
  faUsers = faUsers;
  faHouse = faHouse;
  faTag = faTag;
  faGear = faGear;
  faFileLines = faFileLines;
  faList = faList;
}
