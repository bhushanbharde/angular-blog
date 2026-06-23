import { Component, signal } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-website-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css'],
})
export class WebsiteLayoutComponent {
  page = signal<number>(0);

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
  }
}
