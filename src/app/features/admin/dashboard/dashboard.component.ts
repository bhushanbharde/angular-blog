import { Component } from '@angular/core';
import { AdminMenuComponent } from "../admin-menu/admin-menu.component";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
}
