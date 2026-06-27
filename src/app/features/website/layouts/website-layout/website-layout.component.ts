import { Component, inject, signal } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-website-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css'],
})
export class WebsiteLayoutComponent {
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  hideSidebar = false

  page = signal<number>(0);

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute.firstChild;

        while (route?.firstChild) {
          route = route.firstChild;
        }

        this.hideSidebar = route?.snapshot.data['hideSidebar'] || false;
      });
  }
}
