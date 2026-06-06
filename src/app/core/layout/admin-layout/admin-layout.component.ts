import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { AdminMenuComponent } from "../../../features/admin/admin-menu/admin-menu.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-admin-layout',
  imports: [NavbarComponent, AdminMenuComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {

}
